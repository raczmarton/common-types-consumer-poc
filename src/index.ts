import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { User } from '@raczmarton/common-types-poc'

const trpc = initTRPC.create();
trpc.router({
    getUser: trpc.procedure.input(z.number()).query((input) => {
        return {} as User;
    })
});
