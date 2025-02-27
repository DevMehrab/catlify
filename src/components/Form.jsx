import { Options } from "./Options.jsx"

export const Form = () => {
    let options = [
        {
          "name": "Gender",
          "list": ["male", "female", "unisex"]
        },
        {
          "name": "Color",
          "list": ["Black", "White", "Orange", "Grey", "Mixed"]
        },
        {
          "name": "Personality",
          "list": ["Playful", "Calm", "Aggressive", "Lazy", "Independent"]
        },
        {
          "name": "Optional",
          "list": ["Cute", "Elegant", "Funny", "Mythical"]
        }
    ]
    
    let elements = options.map((item, index) => {
        return <Options key={index} name={item.name} list={item.list}></Options>
    })
    return (
        <>
            {elements}
        </>
    )
}
