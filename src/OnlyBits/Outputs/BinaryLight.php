<?php

namespace OnlyBits\Outputs;

use OnlyBits\Connectors\ConnectInterface;
use OnlyBits\Connectors\Wire;

class BinaryLight implements OutputInterface, ConnectInterface
{
    /**
     * The state of the light: false/off, true/on.
     *
     * @var bool
     */
    private $state;

    /**
     * Light's input. Receives its value from other components through logic wire
     * connection.
     *
     * @var bool
     */
    private $input;

    /**
     * Constructor.
     */
    public function __construct()
    {
        $this->state = false;
        $this->input = false;
    }

    /**
     * {@inheritdoc}
     */
    public function connect(Wire $wire, $pin = null)
    {
        $this->input = $wire->getValue();
    }

    /**
     * {@inheritdoc}
     */
    public function show()
    {
        $this->state = $this->input;

        return $this->state;
    }
}
