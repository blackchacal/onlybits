<?php

namespace OnlyBits\Connectors;

use OnlyBits\Connectors\WireAbstract;

interface ConnectInterface
{
    /**
     * Connect wires to wires, wires to gates, wires to ICs and
     * wires to general component.
     *
     * @param  ConnectInterface $wire Wire to connect to component.
     * @param  int              $pin  Pin where the wire is connected.
     * @return void
     */
    public function connect(WireAbstract $wire, $pin = null);
}
