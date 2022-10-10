import { Fragment, useState, useEffect } from 'react'

import { useLazyQuery } from '@apollo/client'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { Form, useForm, useController } from '@redwoodjs/forms'

const QUERY = gql`
  query PEOPLES_QUERY {
    peoples {
      id
      name
    }
  }
`

const ComboBox = () => {
  // const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')
  const [getPeople, { data }] = useLazyQuery(QUERY)
  const peoples = data?.peoples ? data.peoples : []

  const formMethods = useForm()

  const {
    field: { value, onChange },
  } = useController({
    name: 'test',
    control: formMethods.control,
    defaultValue: { id: '123', name: 'Bob Jones' },
  })

  useEffect(() => {
    getPeople()
  }, [])

  const handleChange = async () => {
    await getPeople()
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <div className="fixed top-16 w-72">
        <Combobox value={value} onChange={onChange}>
          <div className="relative mt-1 rounded-md border border-gray-900">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(person) => person.name}
                onChange={handleChange}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {peoples.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  peoples.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
        <button type="submit">submit</button>
      </div>
    </Form>
  )
}

export default ComboBox
