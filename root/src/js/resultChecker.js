export function CheckPolarity(score_tag){
      if(score_tag === "P+" || score_tag === "P"){
        return "Postive";
      }
      else if(score_tag == "N" || score_tag === "N+"){
        return "Negitive";
      }
      else {
        return "Natrual"
      }
}