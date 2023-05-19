export default async function ScamHTTP(req, res, next) {
  if (req.method !== "POST") return next();
  try {
    if (typeof req.body !== "object") {
      return res.status(200).json({
        value: false,
        data: "Firewall indentificou um pequeno erro na sua requisição. por favor, envie arquivos JSON",
      });
    }
  } catch (err) {
    return res.status(200).json({
      value: false,
      data: "Firewall indentificou um pequeno erro na sua requisição. por favor, envie arquivos JSON",
    });
  }

  if (
    req.headers["content-type"] !== "application/json" &&
    !req.headers["content-type"].includes("multipart/form-data")
  )
    return res.status(200).json({
      value: false,
      data: "Firewall indentificou um pequeno erro na sua requisição. Por favor! Envie uma requisição form Date ou application/json. ",
    });

  next();
}
