<?php

use OnlyBits\LogicGates\BufferGate;

class BufferGateTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicGateOneInputProvider
     */
    public function testOutputRespectsBufferGateTruthTable($inputs, $out)
    {
        $buffer = new BufferGate;
        $buffer->in($inputs);
        $output = $buffer->out();

        $this->assertEquals($output, $out, "The BUFFER gate output doesn't respect the truth table!");
    }

    public function logicGateOneInputProvider()
    {
        return [
            [["1"=>false], false],
            [["1"=>true], true],
        ];
    }
}
