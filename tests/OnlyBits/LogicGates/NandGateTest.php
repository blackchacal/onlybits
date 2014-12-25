<?php

use OnlyBits\LogicGates\NandGate;

class NandGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateTenInputProvider
     */
    public function testOutputRespectsNandGateTruthTable($inputs, $out)
    {
        $nand = new NandGate(10);
        $nand->in($inputs);
        $output = $nand->out();

        $this->assertEquals($output, $out, "The nor gate output doesn't respect the truth table!");
    }

    public function logicGateTenInputProvider()
    {
        return [
            [["1"=>false, "2"=>false, "3"=>false, "4"=>false, "5"=>false, "6"=>false, "7"=>false, "8"=>false, "9"=>false, "10"=>false], true],
            [["1"=>false, "2"=>true, "3"=>false, "4"=>false, "5"=>false, "6"=>false, "7"=>false, "8"=>false, "9"=>false, "10"=>false], true],
            [["1"=>true, "2"=>true, "3"=>true, "4"=>true, "5"=>true, "6"=>true, "7"=>true, "8"=>true, "9"=>true, "10"=>true], false],
        ];
    }
}
