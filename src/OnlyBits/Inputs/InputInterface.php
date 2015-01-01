<?php

namespace OnlyBits\Inputs;

interface InputInterface
{
    /**
     * Emits a signal according to the input type and state.
     *
     * @return mixed Input signal type.
     */
    public function trigger();
}
