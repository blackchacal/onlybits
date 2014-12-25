<?php

use OnlyBits\LogicGates\XnorGate;

class XnorGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateTwoInputProvider
     */
    public function testOutputRespectsXnorGateTruthTable($inputs, $out)
    {
        $xnor = new XnorGate;
        $xnor->in($inputs);
        $output = $xnor->out();

        $this->assertEquals($output, $out, "The XNOR gate output doesn't respect the truth table!");
    }

    public function logicGateTwoInputProvider()
    {
        return [
            [["1"=>false, "2"=>false], true],
            [["1"=>false, "2"=>true], false],
            [["1"=>true, "2"=>false], false],
            [["1"=>true, "2"=>true], true],
        ];
    }
}
