<?php

namespace OnlyBits\Connectors;

use OnlyBits\Connectors\Wire;

class LogicWire extends Wire
{
    public function setValue($value)
    {
        if (!is_bool($value)) {
            $this->value = false;
        }

        $this->value = $value;
    }
}
