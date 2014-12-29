<?php

namespace OnlyBits\Connectors;

abstract class Wire implements IConnect
{
    /**
     * The wire information value. Depending on the type of wire
     * it can be binary, voltage.
     *
     * @var mixed
     */
    protected $value;

    /**
     * Sets the wire value.
     *
     * @param mixed $value New wire value.
     * @return void
     */
    abstract public function setValue($value);

    /**
     * Gets the wire value.
     *
     * @return mixed Wire value.
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * Connects wires with wires.
     *
     * {@inheritdoc}
     */
    public function connect(Wire $wire, $pin = null)
    {
        $this->setValue($wire->getValue());

        return $this;
    }
}
