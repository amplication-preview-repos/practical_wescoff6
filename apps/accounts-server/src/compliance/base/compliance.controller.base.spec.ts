import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ComplianceController } from "../compliance.controller";
import { ComplianceService } from "../compliance.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  complianceDate: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  standardName: "exampleStandardName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  complianceDate: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  standardName: "exampleStandardName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    complianceDate: new Date(),
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    standardName: "exampleStandardName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  complianceDate: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  standardName: "exampleStandardName",
  updatedAt: new Date(),
};

const service = {
  createCompliance() {
    return CREATE_RESULT;
  },
  compliances: () => FIND_MANY_RESULT,
  compliance: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Compliance", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ComplianceService,
          useValue: service,
        },
      ],
      controllers: [ComplianceController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /compliances", async () => {
    await request(app.getHttpServer())
      .post("/compliances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        complianceDate: CREATE_RESULT.complianceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /compliances", async () => {
    await request(app.getHttpServer())
      .get("/compliances")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          complianceDate: FIND_MANY_RESULT[0].complianceDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /compliances/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/compliances"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /compliances/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/compliances"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        complianceDate: FIND_ONE_RESULT.complianceDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /compliances existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/compliances")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        complianceDate: CREATE_RESULT.complianceDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/compliances")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
