function solution(new_id) {
  const reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
  const length = 15;
  new_id = new_id
    .toLowerCase()
    .replace(reg, "")
    .replace(/\.+/g, ".")
    .replace(/[.]\s*$/, "")
    .replace(/^[.]/, "");
  if (new_id === "") {
    new_id = "a";
  }
  if (new_id.length > length) {
    new_id = new_id.substr(0, length);
    if (new_id[new_id.length-1] === ".") {
      new_id = new_id.replace(/.$/, "");
    }
  }
  while (new_id.length < 3) {
    new_id += new_id.charAt(new_id.length - 1);
  }
  return new_id;
}