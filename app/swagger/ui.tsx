'use client';

import ReactSwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

type Props = {
  spec: Record<string, any>,
};

function SwaggerUI({ spec }: Props) {
  return <ReactSwaggerUI spec={spec} />;
}

export default SwaggerUI;
