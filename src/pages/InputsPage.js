import { useState } from 'react'
import Page from '../lib/layout/page'
import Form from '../lib/form'
import Group from '../lib/layout/group'
import Block  from '../lib/block'

const { TextInput, NumericInput, LongTextInput, Checkbox, Select } = Form

export const InputsPage = () => {
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [active, setActive] = useState(false)
    const [variation, setVariation] = useState('')
    const [size, setSize] = useState('')

    const [text, setText] = useState('Initial text')
    const [longText, setLongText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    const [number, setNumber] = useState(1)
    const [checked, setChecked] = useState(false)


    const props = {
        variation,
        loading,
        disabled,
        active,
        activable: active,
        size
    }

    return (
        <Page
            container
            title='Form assets'
        >

            <Block size='l' vertical>
                <Group collapsed vertical >
                    <Checkbox label='Switch Loading' checked={loading} toggle={() => setLoading(!loading)} />
                    <Checkbox label='Switch Disabled' checked={disabled} toggle={() => setDisabled(!disabled)} />
                    <Checkbox label='Switch Active' checked={active} toggle={() => setActive(!active)} />
                </Group>
                <br />
                <Group collapsed vertical>
                    <Select
                        onSelect={value => setVariation(value)}
                        options={[
                            { value: '', label: 'Default' },

                            { value: 'light', label: 'Light' },
                            { value: 'dark', label: 'Dark' },
                            { value: 'ghost', label: 'Ghost' },
                            { value: 'primary', label: 'Primary' },
                            { value: 'secondary', label: 'Secondary' },
                            { value: 'success', label: 'Success' },
                            { value: 'infos', label: 'Infos' },
                            { value: 'danger', label: 'Danger' },
                            { value: 'warning', label: 'Warning' },

                        ]} />
                    <Select
                        onSelect={value => setSize(value)}
                        options={[
                            { value: '', label: 'Default' },
                            { value: 's', label: 'Small' },
                            { value: 'm', label: 'Medium' },
                            { value: 'l', label: 'Large' },
                        ]} />
                </Group>
            </Block>

            <br />

            <h2> Select </h2>


            <Select  {...props}/>
            <br />



            <br />

            <h2> Text input</h2>

            <br />
            <TextInput
                {...props}
                value={text}
                onChange={text => setText(text)}
            />
                <br />
            <TextInput
                {...props}
                pfx='Prefix'
                value={text}
                onChange={text => setText(text)}
            />
                <br />
            <TextInput
                {...props}
                sfx='Suffix'
                value={text}
                onChange={text => setText(text)}
            />
                <br />
            <TextInput
                {...props}
                pfx='Prefix'
                sfx='Suffix'
                value={text}
                onChange={text => setText(text)}
            />

            <br />

            <h2> Long text input</h2>

            <br />
            <LongTextInput
                {...props}
                value={longText}
                onChange={longText => setLongText(longText)}
            />


            <br />

            <h2>Numeric input</h2>
            <br />

            <NumericInput
                {...props}
                value={number}
                onChange={number => setNumber(number)}
            />
                <br />
            <NumericInput
                {...props}
                pfx='Prefix'
                value={number}
                onChange={number => setNumber(number)}
            />
                <br />
            <NumericInput
                {...props}
                sfx='Suffix'
                value={number}
                onChange={number => setNumber(number)}
            />
                <br />
            <NumericInput
                {...props}
                pfx='Prefix'
                sfx='Suffix'
                value={number}
                onChange={number => setNumber(number)}
            />

            <br />

            <h2>Checker</h2>

            <Checkbox
                {...props}
                label="i'm a checkbox"
                checked={checked}
                toggle={() => setChecked(!checked)}
            />

            <br />


            <Group collapsed>
                <Checkbox
                 {...props}
                    label="i'm a checkbox"
                    checked={checked}
                    toggle={() => setChecked(!checked)}
                />
                <br />
                <Checkbox
                 {...props}
                    label="i'm a checkbox"
                    checked={checked}
                    toggle={() => setChecked(!checked)}
                />
                <br />
                <Checkbox
                 {...props}
                    label="i'm a checkbox"
                    checked={checked}
                    toggle={() => setChecked(!checked)}
                />
            </Group>

            <br />

            <h2>Selector</h2>

            <br />

        </Page>
    )
}
