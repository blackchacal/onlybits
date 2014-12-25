<?php

use OnlyBits\Connectors\LogicWire;

class LogicWireTest extends PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider logicValueProvider
     */
    public function testValueIsWellSet($input)
    {
        $lwire = new LogicWire;
        $lwire->setValue($input);
        $value = $lwire->getValue();

        $this->assertEquals($input, $value, "The Logic Wire value is not well set!");
    }

    public function logicValueProvider()
    {
        return [
            [true],
            [false]
        ];
    }
}
