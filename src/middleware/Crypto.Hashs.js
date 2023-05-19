import crypto from "crypto";

function hash512(_txt_) {
  const key = crypto.scryptSync("notfound", "salt", 32);

  const hash = crypto.createCipheriv(
    "aes-256-gcm",
    key,
    Buffer.from("don_chupa")
  );

  let __hash__ = hash.update(_txt_, "utf8", "hex");
  __hash__ += hash.final("hex");
  return { __hash__, key };
}

function hash200(__info__) {
  const key = crypto.scryptSync("notfound", "salt", 32);
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from("don_chupa")
  );
  let __hash__ = decipher.update(__info__, "hex", "utf8");

  return __hash__;
}

export { hash512, hash200 };
