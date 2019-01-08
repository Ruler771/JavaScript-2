do {
    ok = false;
    var promt = +prompt("Введите любое из цифр \n" + object.a1 + object.b1 + object.c1)
    switch (promt) {
    case object.a0:
        alert(object.a00)
        break;
    case object.b0:
        alert(object.b00)
        break;
    case object.c0:
        alert(object.c00)
        break;
    default:
        ok = true;
        alert("Введите число 1,2 или 3")
}
}while(ok)

