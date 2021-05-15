import { useState } from 'react'
import Layout from '../lib/layout'
import Form from '../lib/form'
import  Block  from '../lib/block'
import  Carousel  from '../lib/carousel'

import Card from '../lib/cards'
const { Group, Page } = Layout
const { Checkbox, Select } = Form

export const CardsPage = () => {

    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [active, setActive] = useState(false)
    const [variation, setVariation] = useState('')
    const [size, setSize] = useState('')

    const props = {
        variation,
        loading,
        disabled,
        active,
        activable: active,
        size
    }
    return (
        <Page container title='Cards page'>

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
                            { value: 'light', label: 'Light' },
                            { value: 'dark', label: 'Dark' },
                            { value: 'ghost', label: 'Ghost' },
                            { value: 'white', label: 'Default' },
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
                            { value: 'm', label: 'Default' },
                            { value: 's', label: 'Small' },
                            { value: 'm', label: 'Medium' },
                            { value: 'l', label: 'Large' },
                        ]} />
                </Group>
            </Block>
            <br />

            <h2>Carousel of 200*200 blocks</h2>

            <br />

            <Carousel spacing='m' pad='m'>
            <Block 
                variation='primary'
                style={{ minWidth: 200, height: 200,  }}
                className='carousel-item'
            />
                        <Block
                variation='secondary'
                style={{ minWidth: 200, height: 200,  }}
                className='carousel-item'
            />
                        <Block
                variation='primary'
                style={{ minWidth: 200, height: 200,  }}
                className='carousel-item'
            />
                        <Block
                variation='secondary'
                style={{ minWidth: 200, height: 200,  }}
                className='carousel-item'
            />
                        <Block
                variation='primary'
                style={{ minWidth: 200, height: 200,  }}
                className='carousel-item'
            />
                        <Block
                variation='secondary'
                style={{ minWidth: 200, height: 200,  }}
                className='carousel-item'
            />
            </Carousel>

    
 



            <br />

            <h2>Tabbed</h2>

            <br />

            <Card.Tabbed
           size='m'
            
            title='Card with tabs title'
                tabs={[
                    { label: 'Tab1', content:  <div> Holala</div>},
                    { label: 'Tab2', content:  <div>            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </div>},
                ]}
            />
 
   
           <br />

            <h2>Expandable</h2>

            <br />

           <Card.Expandable 
           title='Expandable card title'
           headVariation='light'
           size='m'
           >
           "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
               
           </Card.Expandable>
           <br />


           <h2>Normal Block</h2>
           <br />

            <Block {...props} >
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </Block>

            <br />


        </Page>
    )
}
