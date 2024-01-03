/**
 * @swagger
 * /hello:
 *   get:
 *     description: Hello world! 반환
 *     responses:
 *       200:
 *         description: Hello world!
 */
export function GET() {
  return new Response('Hello world!');
}