import setupSwagger from '@/swagger';
import SwaggerUI from './ui';

export default async function SwaggerPage() {
  const spec = await setupSwagger();
  return <SwaggerUI spec={spec} />;
}
