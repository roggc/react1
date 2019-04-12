
export const SET_IDIOM='SET_IDIOM';
export const SetIdiom=(idiom)=>
{
  const action=
  {
    type:SET_IDIOM,
    idiom: idiom
  };
  return action;
};
