import { createSwaggerSpec } from 'next-swagger-doc';

const setupSwagger = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'app/(routes)',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Keikku',
        version: '1.0',
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'https',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [],
    },
  });
  return spec;
};

export default setupSwagger;
