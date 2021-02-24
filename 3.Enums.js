var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standard"] = 1] = "Standard";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var memberShip = MemberShip.Simple;
var memberShipReverse = MemberShip[2];
console.log(memberShip);
console.log(memberShipReverse);
