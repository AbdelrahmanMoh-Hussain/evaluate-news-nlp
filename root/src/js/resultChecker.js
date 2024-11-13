export function CheckPolarity(score_tag){
      if(score_tag === "P+" || score_tag === "P"){
        return "Positive";
      }
      else if(score_tag == "N" || score_tag === "N+"){
        return "Negative";
      }
      else {
        return "Natrual"
      }
}