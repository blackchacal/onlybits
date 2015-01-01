<?php

namespace OnlyBits\Inputs;

interface IInput
{
    /**
     * Emits a signal according to the input type and state.
     *
     * @return mixed Input signal type.
     */
    public function trigger();
}
