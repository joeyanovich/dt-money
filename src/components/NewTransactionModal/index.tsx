import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContext } from 'react';

const newTransactionFormnSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormnSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    } = useForm<NewTransactionFormInputs>({
      resolver: zodResolver(newTransactionFormnSchema),
      defaultValues: {
        type: 'income'
      }
    })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type
    })

    reset();
  }
  
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder='Descrição'
            required
            {...register('description')} 
          />
          <input
            type="number"
            placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })} 
          />
          <input
            type="text"
            placeholder='Categoria'
            required
            {...register('category')} 
          />

          <Controller 
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field);
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant='income' value='income' >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant='outcome' value='outcome' >
                    <ArrowCircleDown size={24} />
                    Entrada
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type='submit' disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}