<?php

use OnlyBits\Connectors\Wire;

class WireTest extends PHPUnit_Framework_TestCase
{
    public function testConnectionBetweenWires()
    {
        $wire1 = $this->getMockForAbstractClass('OnlyBits\Connectors\Wire');
        $wire2 = $this->getMockForAbstractClass('OnlyBits\Connectors\Wire');

        $wire1->expects($this->once())
             ->method('setValue')
             ->with($this->anything());

        $wire1->connect($wire2);
    }

    public function testWireIsReturned()
    {
        $wire1 = $this->getMockForAbstractClass('OnlyBits\Connectors\Wire');
        $wire2 = $this->getMockForAbstractClass('OnlyBits\Connectors\Wire');

        $wire = $wire1->connect($wire2);

        $this->assertInstanceOf('OnlyBits\Connectors\Wire', $wire, "No instance of OnlyBits\Connectors\Wire was returned!");
    }
}
