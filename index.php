<?php
ini_set("display_errors", true);
error_reporting(E_ALL);

require 'vendor/autoload.php';

use OnlyBits\LogicGates\OrGate;

$or = new OrGate();

$or->in(["1"=>true, "2"=>true]);

var_dump($or);
var_dump($or->out());
var_dump($or);
