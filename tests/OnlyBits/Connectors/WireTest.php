<?php

use OnlyBits\Connectors\WireAbstract;

class WireTest extends PHPUnit_Framework_TestCase
{
    public function testConnectionBetweenWires()
    {
        $wire1 = $this->getMockForAbstractClass('OnlyBits\Connectors\WireAbstract');
        $wire2 = $this->getMockForAbstractClass('OnlyBits\Connectors\WireAbstract');

        $wire1->expects($this->once())
             ->method('setValue')
             ->with($this->anything());

        $wire1->connect($wire2);
    }

    public function testWireIsReturned()
    {
        $wire1 = $this->getMockForAbstractClass('OnlyBits\Connectors\WireAbstract');
        $wire2 = $this->getMockForAbstractClass('OnlyBits\Connectors\WireAbstract');

        $wire = $wire1->connect($wire2);

        $this->assertInstanceOf('OnlyBits\Connectors\WireAbstract', $wire, "No instance of OnlyBits\Connectors\Wire was returned!");
    }
}
