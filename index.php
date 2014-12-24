<?php
ini_set("display_errors", true);
error_reporting(E_ALL);

require 'vendor/autoload.php';

use OnlyBits\LogicGates\OrGate;
use OnlyBits\LogicGates\AndGate;
use OnlyBits\LogicGates\NorGate;
use OnlyBits\LogicGates\NandGate;
use OnlyBits\LogicGates\NotGate;
use OnlyBits\LogicGates\XorGate;
use OnlyBits\LogicGates\XnorGate;

$or = new OrGate(4);
$nor = new NorGate(2);
$and = new AndGate(4);
$nand = new NandGate(4);
$not = new NotGate();
$xor = new XorGate();
$xnor = new XnorGate();

var_dump("or");
$or->in(["1"=>false, "2"=>false]);
var_dump($or->out());
$or->in(["1"=>false, "2"=>true]);
var_dump($or->out());
$or->in(["1"=>true, "2"=>false]);
var_dump($or->out());
$or->in(["1"=>true, "2"=>false, "3"=>false, "4"=>false]);
var_dump($or->out());
var_dump($or->totalInputs());
var_dump($or);

var_dump("nor");
$nor->in(["1"=>false, "2"=>false]);
var_dump($nor->out());
$nor->in(["1"=>false, "2"=>true]);
var_dump($nor->out());
$nor->in(["1"=>true, "2"=>false]);
var_dump($nor->out());
$nor->in(["1"=>true, "2"=>true]);
var_dump($nor->out());

var_dump("and");
$and->in(["1"=>false, "2"=>false]);
var_dump($and->out());
$and->in(["1"=>false, "2"=>true]);
var_dump($and->out());
$and->in(["1"=>true, "2"=>false]);
var_dump($and->out());
$and->in(["1"=>true, "2"=>true, "3"=>false, "4"=>true]);
var_dump($and->out());

var_dump("nand");
$nand->in(["1"=>false, "2"=>false]);
var_dump($nand->out());
$nand->in(["1"=>false, "2"=>true]);
var_dump($nand->out());
$nand->in(["1"=>true, "2"=>false]);
var_dump($nand->out());
$nand->in(["1"=>true, "2"=>true, "3"=>false, "4"=>true]);
var_dump($nand->out());

var_dump("not");
$not->in(["1"=>false]);
var_dump($not->out());
$not->in(["1"=>true]);
var_dump($not->out());

var_dump("xor");
$xor->in(["1"=>false, "2"=>false]);
var_dump($xor->out());
$xor->in(["1"=>false, "2"=>true]);
var_dump($xor->out());
$xor->in(["1"=>true, "2"=>false]);
var_dump($xor->out());
$xor->in(["1"=>true, "2"=>true]);
var_dump($xor->out());

var_dump("xnor");
$xnor->in(["1"=>false, "2"=>false]);
var_dump($xnor->out());
$xnor->in(["1"=>false, "2"=>true]);
var_dump($xnor->out());
$xnor->in(["1"=>true, "2"=>false]);
var_dump($xnor->out());
$xnor->in(["1"=>true, "2"=>true]);
var_dump($xnor->out());
