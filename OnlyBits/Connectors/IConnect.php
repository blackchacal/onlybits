<?php

namespace OnlyBits\Connectors;

use OnlyBits\Connectors\Wire;

interface IConnect
{
    /**
     * Connect wires to wires, wires to gates, wires to ICs and
     * wires to general component.
     *
     * @param  IConnect $wire Wire to connect to component.
     * @param  int      $pin  Pin where the wire is connected.
     * @return void
     */
    public function connect(Wire $wire, $pin = null);
}
