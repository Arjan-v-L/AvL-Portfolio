/**
 * Created by Cyclamate on 04/04/2017.
 */
for (powerLevel = 0; powerLevel <= 9100; powerLevel + 100) {
    if (powerLevel <= 9000) {
        alert("Your current power level is " + powerLevel + ".\nClick OK to increase.");
    } else {
        confirm("Your power level... It's OVER NINE THOUSAND!!!");
    }
}

