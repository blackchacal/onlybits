start
    = not_operation

not_operation "NOT operation"
  = "not " right:or_operation { return !right; }
  / or_operation

or_operation "OR operation"
  = left:and_operation " or " right:or_operation { return left || right; }
  / nor_operation

nor_operation "NOR operation"
  = left:and_operation " nor " right:nor_operation { return !(left || right); }
  / and_operation

and_operation "AND operation"
  = left:nand_operation " and " right:and_operation { return left && right; }
  / nand_operation

nand_operation "NAND operation"
  = left:primary " nand " right:nand_operation { return !(left && right) }
  / xor_operation

xor_operation "XOR operation"
  = left: xnor_operation " xor " right:xor_operation { return (left && !right) || (!left && right); }
  / xnor_operation

xnor_operation "XNOR operation"
  = left: primary " xnor " right:xnor_operation { return (left && right) || (!left && !right); }
  / primary

primary
  = bool_value
  / "not " bool_value:bool_value { return !bool_value; }
  / "(" or_operation:or_operation ")" { return or_operation; }

bool_value "Boolean value"
  = bool:"true" / bool:"false" { return (bool === "true") ? true : false; }