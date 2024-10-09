import jsonwebtoken from "jsonwebtoken"

// jwt 토큰 생성
export const genToken = (userInfo) => {
  const token = jsonwebtoken.sign({ userInfo }, process.env.JWT_SECRET, {
    expiresIn: "10y",
  })
  return token
}

// jwt 토큰 검증
export const getVerifyToken = (token) => {
  try {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET).userInfo
  } catch (err) {
    return null
  }
}
