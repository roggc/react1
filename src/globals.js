
export const idioms=['english','español'];

export const SelectIdiom=(msgs)=>(props)=>
{
    switch(props.idiom)
    {
      case idioms[0]:return msgs[0];
      case idioms[1]:return msgs[1];
    }
};
