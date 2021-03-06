<?php

namespace OnlyBits\Connectors;

use OnlyBits\Connectors\WireAbstract;

class LogicWire extends WireAbstract
{
    public function setValue($value)
    {
        if (!is_bool($value)) {
            $this->value = false;
        }

        $this->value = $value;
    }
}
