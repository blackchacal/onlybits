<?php

namespace OnlyBits\Outputs;

use OnlyBits\Connectors\ConnectInterface;
use OnlyBits\Connectors\WireAbstract;

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
     * Instance of entity connected to it. In this case it should be a wire.
     *
     * @var OnlyBits\Connectors\Wire
     */
    private $connected_to;

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
    public function connect(WireAbstract $wire, $pin = null)
    {
        $this->input = $wire->getValue();

        $this->connected_to = $wire;
    }

    /**
     * {@inheritdoc}
     */
    public function show()
    {
        if ($this->connected_to instanceof WireAbstract) {
            $this->input = $this->connected_to->getValue();
        }

        $this->state = $this->input;

        return $this->state;
    }
}
