import { useState } from 'react'

import Layout from '../lib/layout'
import Form from '../lib/form'
import { Button } from '../drinkit-ui/cta'
import { Block } from '../drinkit-ui/base'
import Page from '../drinkit-ui/sections'

const { Group, } = Layout
const { Checkbox, Select } = Form

const Section = ({ children, ver, light, dark }) => {
    return (
        <Block pad='md'
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: ver ? 'column' : 'row',
                flex: 1,
                width: '100%',
                alignItems: 'center',
                background: dark ? 'black' : light ? 'white' : 'inherit'
            }}>
            {children}
        </Block>
    )
}




const ButtonsPage = () => {

    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [active, setActive] = useState(false)
    const [locked, setLocked] = useState(false)

    const props = {
        children: 'Button',
        isLoading: loading,
        isActive: active,
        isLocked: locked,
        isDisabled: disabled,
    }

    return (
        <Page>


            <div className='container'>
                <p>
                    Loading : <input type='checkbox' checked={loading} onClick={() => setLoading(!loading)} />
                </p>
                <br />
                <p>
                    Disabled : <input type='checkbox' checked={disabled} onClick={() => setDisabled(!disabled)} />
                </p>
                <br />
                <p>
                    Active : <input type='checkbox' checked={active} onClick={() => setActive(!active)} />
                </p>
                <br />
                <p>
                    Locked : <input type='checkbox' checked={locked} onClick={() => setLocked(!locked)} />
                </p>
                <br />
                <br />

                <br />
                <h2>Theme</h2>
                <hr />
                <Section title='Button fill style' ver>
                    <Section light title='primary'>
                        <Button {...props} theme='primary' fill children="filled" />
                        <Button {...props} theme='primary' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='primary' fill={'ghost'} children="Ghost" />
                        <Button {...props} theme='secondary' fill children="filled" />
                        <Button {...props} theme='secondary' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='secondary' fill={'ghost'} children="Ghost" />
                    </Section>
                    <Section dark title=' '>
                        <Button {...props} theme='primary' fill children="filled" />
                        <Button {...props} theme='primary' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='primary' fill={'ghost'} children="Ghost" />
                        <Button {...props} theme='secondary' fill children="filled" />
                        <Button {...props} theme='secondary' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='secondary' fill={'ghost'} children="Ghost" />
                    </Section>
                    <Section light >
                        <Button {...props} theme='danger' fill children="filled" />
                        <Button {...props} theme='danger' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='danger' fill={'ghost'} children="Ghost" />
                        <Button {...props} theme='warning' fill children="filled" />
                        <Button {...props} theme='warning' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='warning' fill={'ghost'} children="Ghost" />
                    </Section>
                    <Section dark title=' '>
                        <Button {...props} theme='danger' fill children="filled" />
                        <Button {...props} theme='danger' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='danger' fill={'ghost'} children="Ghost" />
                        <Button {...props} theme='warning' fill children="filled" />
                        <Button {...props} theme='warning' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='warning' fill={'ghost'} children="Ghost" />
                    </Section>
                    <Section light >
                        <Button {...props} theme='success' fill children="filled" />
                        <Button {...props} theme='success' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='success' fill={'ghost'} children="Ghost" />
                        <Button {...props} theme='infos' fill children="filled" />
                        <Button {...props} theme='infos' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='infos' fill={'ghost'} children="Ghost" />
                    </Section>
                    <Section dark title=' '>
                        <Button {...props} theme='success' fill children="filled" />
                        <Button {...props} theme='success' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='success' fill={'ghost'} children="Ghost" />
                        <Button {...props} theme='infos' fill children="filled" />
                        <Button {...props} theme='infos' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='infos' fill={'ghost'} children="Ghost" />
                    </Section>
                    <Section light >
                        <Button {...props} theme='dark' fill children="filled" />
                        <Button {...props} theme='dark' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='dark' fill={'ghost'} children="Ghost" />
                    </Section>
                    <Section dark >
                        <Button {...props} theme='light' fill children="filled" />
                        <Button {...props} theme='light' fill={'outlined'} children="Outlined" />
                        <Button {...props} theme='light' fill={'ghost'} children="Ghost" />
                    </Section>
                </Section>



                <br />
                <h2>Width</h2>
                <hr />
                <Section  >
                    <Button {...props} width='xs' children="w : xs" />
                    <Button {...props} width='sm' children="w : sm" />
                    <Button {...props} width='md' children="w : md" />
                    <Button {...props} width='lg' children="w : lg" />
                    <Button {...props} width='xl' children="w : xl" />
                    <Button {...props} width='xxl' children="w : xxl" />
                </Section>
                <Group size='s'>
                    <Button {...props} bg='default' children='default' />
                    <Button {...props} bg='primary' children='primary' />
                    <Button {...props} bg='secondary' children='secondary' />
                    <Button {...props} bg='light' children='light' />
                    <Button {...props} bg='dark' children='dark' />
                    <Button {...props} bg='ghost' children='ghost' />
                    <Button {...props} bg='success' children='success' />
                    <Button {...props} bg='infos' children='infos' />
                    <Button {...props} bg='danger' children='danger' />
                    <Button {...props} bg='warning' children='warning' />

                </Group>
                <h2>Sizes </h2>
                <Group size='s'>
                    <Button {...props} size='xs' children='xs' />
                    <Button {...props} size='sm' children='sm' />
                    <Button {...props} size='md' children='md' />
                    <Button {...props} size='lg' children='lg' />
                    <Button {...props} size='xl' children='xl' />
                    <Button {...props} size='xxl' children='xxl' />
                </Group>
                <h2>Contents type </h2>
        ---

            <h2> Prefix & Suffix & Group (horizontal/default)</h2>
                <br />
                <Group size='s'>
                    <Button {...props} children='Label only' />
                    <Button {...props} before='Prefix' children='Label only' />
                    <Button {...props} children='Label only' after='Suffix' />
                    <Button {...props} before='Prefix' children='Label only' after='Suffix' />
                </Group>
                <br />

                <h2> Group (vertical & collapsed )</h2>
                <br />
                <Group size='m' vertical collapsed>
                    <Button {...props} label='Label only' />
                    <Button {...props} before='Prefix' label='Label only' />
                    <Button {...props} label='Label only' after='Suffix' />
                    <Button {...props} before='Prefix' label='Label only' after='Suffix' />
                </Group>
                <br />

                <h2> Icon Button</h2>
                <br />
                <Button {...props} label='Icon' icon />
                <br />


                <h2> Block </h2>
                <br />
                <Button {...props} label='Default' />
                <Button {...props} label='Block' block />
                <br />

            </div>

        </Page >
    )
}

export default ButtonsPage