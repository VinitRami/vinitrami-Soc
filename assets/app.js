/* Vinit Rami portfolio. Plain JavaScript, no dependencies, no build step. */
"use strict";
var WORLD = {"step":1,"lat0":84,"lat1":-78,"cols":360,"rows":162,"names":["Greenland","Canada","Russia","Norway","United States of America","Finland","Sweden","Iceland","United Kingdom","Estonia","Latvia","Denmark","Lithuania","Belarus","Germany","Poland","Kazakhstan","Ireland","China","Netherlands","Ukraine","Mongolia","France","Belgium","Czechia","Slovakia","Austria","Hungary","Switzerland","Romania","Moldova","Italy","Slovenia","Croatia","Serbia","Uzbekistan","Bosnia and Herz.","Japan","Spain","Bulgaria","Georgia","Andorra","Montenegro","Kosovo","Turkmenistan","Kyrgyzstan","North Korea","Portugal","Albania","Macedonia","Greece","Turkey","Azerbaijan","Armenia","Tajikistan","Iran","Afghanistan","South Korea","Algeria","Tunisia","Syria","Iraq","Pakistan","Morocco","India","Lebanon","Mexico","Libya","Israel","Jordan","Egypt","Saudi Arabia","Kuwait","Nepal","Bhutan","Myanmar","W. Sahara","Mauritania","Bangladesh","Mali","United Arab Emirates","Oman","Taiwan","Cuba","Niger","Chad","Vietnam","Sudan","Laos","Haiti","Dominican Rep.","Thailand","Yemen","Guatemala","Belize","Eritrea","Philippines","Senegal","Honduras","Nicaragua","Burkina Faso","Ethiopia","Cambodia","El Salvador","Gambia","Nigeria","Guinea-Bissau","Guinea","Cameroon","Colombia","Venezuela","Benin","S. Sudan","Djibouti","Somalia","Costa Rica","Côte d'Ivoire","Ghana","Togo","Central African Rep.","Somaliland","Panama","Sierra Leone","Sri Lanka","Guyana","Liberia","Malaysia","Suriname","Indonesia","Brazil","Dem. Rep. Congo","Kenya","Brunei","Congo","Uganda","Eq. Guinea","Gabon","Ecuador","Peru","Rwanda","Tanzania","Burundi","Papua New Guinea","Angola","Zambia","Timor-Leste","Bolivia","Malawi","Mozambique","Australia","Madagascar","Samoa","Zimbabwe","Vanuatu","Fiji","Fr. Polynesia","Namibia","Chile","Botswana","Paraguay","Mauritius","New Caledonia","Argentina","South Africa","eSwatini","Lesotho","Uruguay","New Zealand","Fr. S. Antarctic Lands","Falkland Is.","S. Geo. and the Is.","Antarctica"],"ids":["304","124","643","578","840","246","752","352","826","233","428","208","440","112","276","616","398","372","156","528","804","496","250","056","203","703","040","348","756","642","498","380","705","191","688","860","070","392","724","100","268","020","499",null,"795","417","408","620","008","807","300","792","031","051","762","364","004","410","012","788","760","368","586","504","356","422","484","434","376","400","818","682","414","524","064","104","732","478","050","466","784","512","158","192","562","148","704","729","418","332","214","764","887","320","084","232","608","686","340","558","854","231","116","222","270","566","624","324","120","170","862","204","728","262","706","188","384","288","768","140",null,"591","694","144","328","430","458","740","360","076","180","404","096","178","800","226","266","218","604","646","834","108","598","024","894","626","068","454","508","036","450","882","716","548","242","258","516","152","072","600","480","540","032","710","748","426","858","554","260","238","239","010"],"rle":[0,143,1,8,0,307,2,20,0,15,1,2,0,1,1,22,0,292,2,23,0,1,2,1,0,4,1,40,0,1,1,1,0,2,1,5,0,69,3,1,0,206,2,7,0,9,2,11,0,2,1,50,0,63,3,1,0,1,3,2,0,9,3,2,0,31,3,5,0,167,2,23,0,8,1,46,0,30,4,2,0,1,4,1,0,1,4,3,0,1,4,6,0,67,3,7,0,147,2,4,0,4,2,5,0,2,2,3,0,2,2,4,0,2,2,11,0,4,1,51,0,32,4,3,0,1,4,4,0,1,4,2,0,78,3,5,0,138,2,1,0,3,2,3,0,4,2,1,0,9,2,3,0,2,2,1,0,2,2,2,0,2,2,2,0,1,2,3,0,8,1,1,0,3,1,45,0,35,4,4,0,3,4,1,0,1,4,1,0,79,3,3,0,133,2,2,0,1,2,1,0,7,2,1,0,4,2,2,0,2,2,3,0,2,2,5,0,1,2,1,0,1,2,1,0,1,2,7,0,10,1,47,0,87,3,4,0,33,3,11,0,131,2,10,0,6,2,6,0,2,2,5,0,1,2,6,0,22,1,39,0,77,3,5,0,27,3,24,0,23,3,5,0,1,3,2,0,1,3,1,0,91,2,1,0,7,2,2,0,14,2,1,0,9,2,1,0,31,1,37,0,75,3,3,0,28,3,24,0,1,3,1,0,123,2,9,0,8,2,2,0,3,2,4,0,2,2,5,0,3,2,2,0,2,2,7,0,21,1,31,0,1,1,3,0,75,3,3,0,18,3,2,0,4,3,26,0,3,3,3,0,1,3,5,0,4,3,3,0,1,3,1,0,12,3,3,0,92,2,6,0,1,2,9,0,1,2,3,0,3,2,6,0,1,2,1,0,4,2,4,0,1,2,4,0,3,2,3,0,20,1,30,0,1,1,2,0,75,3,2,0,14,3,4,0,2,3,1,0,1,3,1,0,3,3,48,0,12,3,5,0,34,3,2,0,54,2,3,0,3,2,2,0,1,2,11,0,5,2,1,0,3,2,2,0,3,2,16,0,1,2,1,0,17,1,1,0,1,1,26,0,1,1,3,0,76,3,3,0,12,3,4,0,1,3,2,0,2,3,6,0,1,3,45,0,3,3,1,0,2,3,4,0,1,3,11,0,49,5,8,0,2,5,1,0,37,2,9,0,7,2,4,0,3,2,21,0,14,1,2,0,1,1,22,0,1,1,1,0,3,1,1,0,46,4,2,0,1,4,5,0,36,3,6,0,1,3,9,0,1,3,76,0,37,5,22,2,2,0,6,2,1,0,1,2,5,0,1,2,1,0,1,2,2,0,4,2,14,0,5,2,1,0,1,2,1,0,1,2,3,0,6,2,2,0,4,2,1,0,1,2,9,0,14,1,2,0,1,1,27,0,41,4,1,0,1,4,7,6,3,4,1,3,2,0,28,3,4,0,4,3,5,0,1,3,94,0,3,3,7,0,2,3,2,0,12,5,25,2,27,0,1,2,1,0,4,2,4,0,7,2,1,0,2,2,3,0,1,2,2,0,2,2,4,0,8,2,7,0,14,1,25,0,43,4,1,0,1,4,1,7,1,4,1,7,2,6,6,3,10,0,6,3,2,0,7,3,1,0,1,3,4,0,1,3,8,0,1,3,8,0,1,3,107,0,11,5,23,2,32,0,1,2,12,0,1,2,7,0,1,2,6,0,4,2,2,0,3,2,8,0,10,1,21,0,49,7,7,6,7,3,11,0,3,3,1,0,3,3,24,0,2,3,115,0,6,5,1,0,4,5,19,2,54,0,2,2,2,0,9,2,12,0,8,1,19,0,48,4,2,7,9,6,5,3,4,0,2,3,6,0,3,3,26,0,2,3,109,0,3,3,4,0,4,5,27,2,52,0,1,2,1,0,1,2,1,0,11,2,7,0,2,2,2,0,10,1,13,0,16,8,1,0,1,8,8,0,26,4,3,7,7,0,3,6,5,3,5,0,5,3,140,0,6,3,2,0,11,5,20,2,53,0,2,2,4,0,4,2,2,0,3,2,8,0,14,1,11,0,18,8,8,0,25,4,3,7,7,0,3,6,6,3,5,0,2,3,140,0,11,5,2,0,9,5,20,2,50,0,5,2,2,0,13,2,2,0,1,2,3,0,14,1,10,0,21,8,2,0,26,4,2,0,1,4,1,7,8,0,2,6,8,3,149,0,16,5,24,2,48,0,9,2,2,0,4,2,1,0,8,2,2,0,2,2,1,0,14,1,8,0,48,4,6,7,6,0,3,6,10,3,132,0,2,3,12,0,1,3,1,0,15,5,25,2,47,0,16,2,6,0,23,1,7,0,47,4,8,7,4,0,5,6,8,3,127,0,3,3,2,0,2,3,9,0,22,5,13,0,1,5,3,0,2,5,5,2,46,0,17,2,8,0,24,1,2,0,42,9,1,0,6,4,8,7,5,0,4,6,4,0,1,6,1,0,1,3,126,0,7,3,6,0,1,3,2,0,27,5,8,0,14,5,2,2,2,5,1,2,40,0,17,2,8,0,5,2,1,0,69,4,5,0,1,4,1,7,6,0,7,10,2,0,1,3,121,0,1,3,1,0,1,3,3,0,5,3,3,0,40,5,3,0,1,5,1,0,15,5,3,2,41,0,15,2,10,0,1,2,4,0,58,9,2,0,9,4,3,0,2,7,6,0,5,10,1,0,1,10,4,3,113,0,18,3,3,0,41,5,1,0,1,5,3,0,16,5,3,2,40,0,16,2,15,0,55,9,5,0,14,7,5,0,1,7,1,0,3,11,1,0,1,11,4,3,112,0,17,3,6,0,37,5,2,0,24,5,1,0,1,5,1,2,43,0,11,2,15,0,57,9,2,0,11,12,3,0,2,7,4,0,4,11,7,3,110,0,18,3,7,0,63,5,1,0,1,5,2,2,44,0,9,2,17,0,55,9,3,0,10,12,4,0,1,7,1,0,7,13,6,14,4,3,105,0,20,3,6,0,33,5,1,0,34,2,48,0,2,2,22,0,50,9,3,0,1,9,3,0,10,15,1,0,3,15,1,0,2,16,3,0,1,3,3,13,3,14,5,3,34,17,6,3,66,0,19,3,5,0,66,2,1,0,2,2,48,0,3,2,23,0,46,18,4,0,3,9,3,0,7,15,1,0,1,15,5,16,10,14,9,3,29,17,11,3,1,17,3,3,46,19,1,3,17,0,15,3,4,0,68,2,1,0,3,2,46,0,3,2,23,0,46,18,4,0,2,9,6,0,3,20,2,15,8,16,8,14,9,3,29,17,18,3,42,19,5,3,15,0,1,3,1,0,13,3,2,0,74,2,71,0,1,2,1,0,51,9,5,0,3,20,2,15,9,16,9,21,5,14,2,21,3,3,18,17,1,3,8,17,18,3,19,22,3,3,19,19,7,3,14,0,1,3,1,0,13,3,2,0,74,2,1,0,2,2,65,0,3,2,1,0,51,9,1,0,6,23,1,24,3,15,7,25,3,16,8,21,11,3,14,17,35,3,7,22,3,3,4,22,4,3,17,19,8,3,13,0,2,3,2,0,89,2,2,0,1,2,57,0,3,2,2,0,4,2,2,0,1,2,1,0,52,23,1,0,1,23,6,15,7,25,6,26,1,16,3,21,17,3,7,17,40,3,2,22,19,3,4,22,4,19,13,3,11,0,2,3,2,0,92,2,1,5,30,2,24,0,1,2,4,0,6,2,5,0,48,23,13,15,5,27,4,26,3,28,2,21,18,3,7,17,39,19,2,22,28,19,15,3,9,0,2,3,1,0,93,5,1,0,1,5,36,2,21,0,9,2,1,0,1,2,1,0,51,23,9,29,3,27,7,28,5,30,5,31,2,21,9,3,10,17,38,19,4,22,29,19,16,3,4,0,3,3,1,0,93,5,39,2,15,5,2,2,3,0,1,2,1,0,2,2,1,0,58,23,8,29,4,32,4,27,1,33,1,34,1,28,4,30,7,31,2,21,1,0,1,21,4,0,2,3,11,0,4,17,30,19,8,22,26,19,17,3,4,0,5,3,1,0,92,5,41,2,12,5,4,2,6,0,60,23,8,32,6,0,1,34,5,35,2,30,7,21,2,0,3,3,2,0,3,3,10,0,5,17,5,36,1,17,23,19,9,22,25,19,17,3,4,0,99,5,42,2,6,5,8,0,2,2,2,0,63,23,8,32,5,0,3,34,1,37,3,35,4,30,6,0,9,3,9,0,3,17,6,36,5,17,19,19,14,22,17,19,20,3,5,0,6,38,1,0,93,5,42,2,3,5,9,0,62,39,3,0,3,23,9,0,3,32,4,0,3,37,2,35,4,40,6,0,11,41,1,3,7,0,3,17,5,36,9,17,16,19,15,22,16,19,19,3,4,0,6,38,4,0,91,5,41,2,3,5,9,0,62,39,10,42,1,23,1,0,6,23,1,0,1,32,3,0,4,43,2,44,2,35,1,40,5,0,14,41,4,3,2,0,5,17,3,36,2,45,1,36,7,17,5,46,8,17,1,19,22,22,8,19,20,47,1,0,11,38,1,0,93,5,53,0,62,48,3,39,8,0,11,32,3,0,3,49,1,50,3,40,1,51,1,40,1,51,1,52,1,0,4,52,4,0,5,52,1,41,4,53,1,3,1,53,1,0,5,45,1,17,1,36,1,45,3,36,7,17,2,36,1,46,9,19,49,47,2,0,106,5,50,0,65,48,2,39,8,0,7,32,2,0,5,32,3,0,1,49,2,51,3,0,5,52,15,54,1,53,5,0,3,45,9,36,7,55,1,36,2,46,3,19,1,46,1,19,44,0,1,19,3,47,4,0,11,38,2,0,94,5,50,0,65,48,2,39,7,0,2,39,1,0,5,32,2,0,6,32,1,0,3,51,3,0,4,52,17,56,1,53,2,56,1,53,1,0,4,45,10,36,4,55,5,46,2,19,45,0,2,19,2,0,2,47,3,0,12,38,2,0,95,5,48,0,46,48,1,0,19,48,2,39,7,0,16,32,1,0,4,51,3,0,2,52,18,56,5,0,5,45,11,36,3,55,7,19,43,0,7,47,3,0,12,38,2,0,96,5,46,0,67,48,2,39,6,0,14,32,2,0,7,51,1,0,4,52,18,56,4,0,5,45,1,56,4,45,8,36,1,55,1,57,2,55,4,19,44,0,1,19,2,0,5,58,2,0,10,38,2,0,97,5,46,0,70,39,1,0,6,59,7,60,3,0,18,52,2,0,1,52,2,0,2,52,1,61,4,62,4,56,16,45,4,57,7,63,4,19,45,0,6,58,2,0,7,38,5,0,98,5,45,0,70,64,1,0,4,59,9,60,3,0,25,61,5,62,5,56,15,45,2,57,9,63,5,19,43,0,6,58,3,0,5,38,6,0,99,5,44,0,70,64,5,59,10,60,2,0,26,61,5,62,4,56,16,57,10,63,3,65,5,19,41,0,6,58,1,0,4,38,3,0,1,38,2,0,105,5,39,0,71,64,6,59,10,60,3,0,24,66,1,61,3,62,7,56,15,57,9,63,4,65,5,19,42,0,5,58,1,0,3,38,4,0,109,67,2,5,34,0,72,64,8,59,9,60,4,68,3,0,5,68,3,0,12,69,1,61,1,70,2,62,8,56,14,57,8,63,6,65,3,19,43,0,10,38,1,0,111,67,2,0,1,67,2,5,4,67,2,5,25,0,71,64,6,59,13,60,1,68,6,0,4,68,5,71,2,0,7,69,1,70,2,72,4,62,7,56,13,57,7,63,7,65,4,19,42,0,9,38,1,0,113,67,1,0,2,67,8,5,24,0,71,64,5,59,14,60,1,68,9,0,1,68,5,71,10,70,3,72,5,62,5,56,13,57,5,63,8,65,6,19,41,0,124,67,2,0,1,67,8,5,1,67,2,5,6,0,4,5,1,0,7,5,2,0,71,64,3,59,17,68,15,71,7,0,1,71,2,70,1,72,8,62,3,73,1,0,3,56,10,63,1,57,2,63,9,65,7,74,3,19,39,0,124,67,1,0,1,67,12,5,3,0,14,5,2,0,70,64,2,59,19,68,15,71,10,72,13,0,3,56,11,63,10,65,9,74,4,19,8,65,3,19,26,0,123,67,3,0,1,67,12,5,2,0,14,5,3,0,67,64,4,59,19,68,15,71,9,0,2,72,13,0,4,56,10,63,7,65,13,74,5,65,1,75,3,65,5,76,2,19,22,0,126,67,2,0,2,67,10,5,2,0,15,5,2,0,66,64,3,77,2,78,2,59,17,68,15,71,9,0,2,72,14,0,7,56,5,63,8,65,17,74,1,79,1,65,6,76,4,19,21,0,128,67,1,0,2,67,12,0,16,5,1,0,65,64,3,78,6,59,16,68,15,71,10,0,2,72,13,0,9,56,3,63,4,0,1,63,4,65,18,79,1,65,5,76,3,19,22,0,128,67,1,0,3,67,10,0,83,64,2,77,1,78,5,80,3,59,14,68,15,71,10,0,2,72,14,0,4,81,1,82,1,0,10,63,4,65,17,79,4,65,2,76,4,19,20,0,3,83,1,0,128,67,1,0,2,67,9,0,82,64,2,77,2,78,6,80,3,59,15,68,13,71,11,0,3,72,13,81,3,82,4,0,9,65,21,79,2,65,2,76,6,19,18,0,3,83,1,0,133,67,8,0,14,84,1,0,1,84,4,0,62,64,2,77,1,78,7,80,5,59,11,85,5,86,3,68,7,71,11,0,3,72,16,82,5,0,10,65,19,79,4,76,6,19,3,87,5,19,7,0,6,83,1,0,134,67,7,0,9,67,1,0,9,84,2,0,60,64,2,77,2,78,7,80,7,59,8,85,6,86,5,68,5,88,12,0,2,72,16,82,4,0,11,65,2,0,1,65,14,0,5,79,1,76,7,19,2,89,1,87,5,0,2,19,1,0,143,67,9,0,7,67,3,0,10,84,2,0,59,78,10,80,8,59,5,85,9,86,6,68,3,88,12,0,3,72,15,82,4,0,14,65,14,0,6,76,7,89,4,87,3,0,3,19,1,0,93,5,1,0,50,67,9,0,5,67,4,0,14,90,1,91,2,0,54,78,10,80,9,59,3,85,10,86,8,88,13,0,4,72,12,82,5,0,15,65,12,0,9,76,4,92,3,89,3,87,2,0,3,19,2,0,145,67,9,0,2,67,1,0,1,67,3,0,14,90,2,91,4,0,52,78,10,80,10,85,12,86,8,88,14,0,3,72,8,93,3,82,5,0,16,65,11,0,10,76,4,92,3,89,4,87,1,0,3,19,1,0,149,67,10,94,2,95,1,0,72,78,10,80,10,85,12,86,8,88,14,96,1,0,3,72,1,93,1,72,4,93,5,82,2,0,18,65,10,0,12,76,3,92,7,89,1,87,1,0,13,97,2,0,139,67,8,94,2,95,1,0,72,98,2,78,8,80,10,85,11,86,9,88,13,96,2,0,4,93,10,0,20,65,9,0,12,76,2,0,2,76,1,92,6,89,2,87,1,0,12,97,2,0,145,67,1,94,3,99,5,0,67,98,4,78,1,80,1,78,5,80,10,85,10,86,9,88,14,96,3,0,3,93,9,0,22,65,6,0,18,76,1,92,7,89,1,87,2,0,11,97,1,0,147,94,3,99,4,100,2,0,66,98,5,80,10,101,2,85,14,86,8,88,14,96,3,102,1,96,1,0,2,93,6,0,25,65,6,0,18,92,7,89,1,103,1,87,2,0,11,97,2,0,149,104,1,99,1,100,3,0,67,105,3,98,2,80,9,101,4,85,3,106,2,85,7,106,1,86,8,88,14,102,5,96,1,0,1,93,4,0,28,65,5,0,18,76,1,92,1,0,1,92,1,103,6,87,1,0,11,97,1,0,1,97,2,0,149,100,3,0,67,98,1,107,2,108,1,98,2,80,7,101,6,85,2,106,10,109,1,86,7,88,14,102,6,96,1,0,10,93,1,0,21,65,5,0,19,92,1,0,2,92,1,103,5,87,1,0,15,97,1,0,149,100,2,0,11,110,1,0,2,111,1,0,54,108,6,80,4,101,7,112,1,106,12,86,8,88,9,113,1,88,2,102,7,114,1,0,7,115,1,0,25,65,4,0,19,92,1,0,3,103,3,87,3,0,13,97,1,0,1,97,2,0,148,116,3,0,7,110,3,111,1,0,1,111,5,0,2,111,1,0,48,108,7,80,1,117,1,101,3,118,3,119,1,112,3,106,10,109,1,86,7,120,1,88,9,113,2,102,9,121,1,0,1,121,4,115,2,0,25,65,4,0,18,76,1,0,5,103,1,87,2,0,12,97,1,0,156,116,1,122,1,0,2,122,1,0,3,110,3,111,1,0,1,111,10,0,47,108,1,123,2,108,3,117,5,118,3,119,1,112,2,106,10,109,1,86,7,120,3,88,1,113,3,88,1,113,5,102,9,121,6,115,2,0,25,65,3,0,1,124,1,0,17,92,1,0,6,87,1,0,12,97,1,0,6,97,1,0,150,116,1,122,3,0,2,122,1,110,4,111,13,0,47,123,2,108,3,117,5,118,4,119,1,112,1,106,9,109,3,86,4,120,5,113,10,102,12,121,2,115,2,0,27,65,1,0,2,124,1,0,17,92,2,0,23,97,3,0,153,122,1,0,2,110,6,111,11,125,2,0,47,123,1,126,3,117,5,118,3,119,2,112,1,106,9,109,3,120,10,113,9,102,13,115,3,0,30,124,2,0,17,92,1,0,24,97,3,0,156,110,7,111,9,125,3,0,47,126,2,117,6,118,4,119,1,112,1,0,1,106,6,109,5,120,11,113,9,102,11,115,3,0,31,124,2,0,18,92,2,0,14,127,2,0,6,97,2,0,157,110,9,111,7,125,4,128,3,23,1,0,43,126,3,117,4,118,3,0,5,106,4,109,6,120,12,113,8,102,10,115,4,0,46,129,1,0,4,127,3,0,12,127,4,0,164,110,9,111,7,130,1,125,2,128,4,23,2,0,44,117,1,0,13,106,1,0,2,109,6,120,4,131,2,120,2,131,5,113,1,131,1,113,4,132,2,102,7,115,5,0,48,129,2,0,3,127,2,0,11,133,1,127,4,0,164,110,10,111,3,130,4,125,2,128,4,23,2,130,1,0,61,109,5,120,2,134,2,131,12,135,3,132,5,102,1,132,2,115,5,0,50,129,2,0,2,127,2,0,10,127,3,129,1,0,165,110,11,111,3,130,4,125,3,128,3,23,1,130,2,0,61,109,6,134,2,131,13,135,4,132,6,115,5,0,52,129,2,0,2,127,2,0,7,127,4,129,3,0,10,129,1,0,152,110,9,130,3,111,3,130,5,125,1,130,8,0,60,136,1,137,2,134,5,131,13,135,4,132,6,115,3,0,55,129,3,0,1,127,1,0,5,129,1,127,2,129,1,127,2,129,3,0,10,129,1,0,151,138,3,110,7,130,19,0,60,137,5,134,4,131,12,135,4,132,7,115,2,0,56,129,4,0,6,129,9,0,3,129,3,0,4,129,1,0,151,138,5,139,1,110,4,130,22,0,57,137,5,134,4,131,12,135,4,132,7,115,1,0,58,129,3,0,1,129,1,0,4,129,9,0,9,129,1,0,2,129,1,0,1,129,1,0,146,138,5,139,2,110,5,130,16,0,1,130,3,0,1,130,3,0,54,137,5,134,3,131,12,140,2,141,4,132,6,115,1,0,59,129,3,0,6,129,7,0,2,129,3,0,5,129,1,0,4,129,2,0,145,138,4,139,7,130,20,0,1,130,4,0,55,137,2,134,4,131,13,140,1,141,7,132,4,0,60,129,6,0,3,129,7,0,2,129,3,0,14,129,5,0,138,139,1,138,2,139,7,110,1,130,31,0,50,137,1,134,4,131,13,142,2,141,7,132,2,0,62,129,4,0,9,129,1,0,3,129,1,0,1,129,1,0,4,129,1,0,3,129,1,0,2,129,8,143,3,0,135,139,1,138,1,139,7,130,34,0,50,134,3,131,14,141,10,0,64,129,3,0,30,129,5,143,4,0,134,139,8,130,38,0,47,144,1,131,17,141,9,0,65,129,2,0,13,129,1,0,14,129,1,0,3,129,3,143,5,0,2,143,1,0,1,143,2,0,128,139,7,130,38,0,47,144,5,131,13,141,9,0,67,129,3,0,25,129,1,0,4,129,2,143,7,0,7,143,1,0,124,139,6,130,39,0,48,144,4,131,2,144,3,131,8,141,9,0,68,129,6,0,18,129,1,0,6,129,3,143,6,0,134,139,6,130,38,0,48,144,9,131,7,145,2,141,8,0,76,129,6,0,1,129,2,0,2,146,1,0,13,129,1,143,2,0,3,143,2,0,134,139,6,130,36,0,49,144,9,131,7,145,4,141,7,0,79,129,1,0,4,129,1,0,22,143,2,0,1,143,1,0,131,139,7,130,3,147,3,130,29,0,50,144,8,131,7,145,5,148,1,141,5,0,110,143,1,0,132,139,8,147,4,130,28,0,51,144,10,145,1,131,3,145,5,148,2,141,3,149,2,0,90,150,1,0,1,150,1,0,9,150,1,0,10,143,1,0,129,139,8,147,5,130,26,0,51,144,11,145,4,131,2,145,3,148,1,149,7,0,8,151,1,0,81,150,6,0,5,150,1,0,44,152,1,0,96,139,7,147,7,130,23,0,52,144,9,145,11,148,2,149,6,0,7,151,2,0,80,150,6,0,6,150,2,0,140,139,7,147,9,130,21,0,51,144,10,145,10,149,2,148,2,149,5,0,7,151,2,0,76,150,2,0,2,150,6,0,6,150,3,0,140,139,6,147,9,130,21,0,51,144,10,145,8,149,4,148,2,149,5,0,5,151,4,0,74,150,12,0,5,150,4,0,142,139,4,147,11,130,19,0,51,144,10,145,7,153,3,149,8,0,4,151,6,0,73,150,15,0,1,150,1,0,1,150,4,0,22,154,1,0,11,155,1,0,30,156,1,0,78,139,1,147,12,130,19,0,51,157,7,144,4,145,1,157,1,145,2,153,6,149,5,0,6,151,5,0,73,150,18,0,1,150,5,0,144,158,1,147,11,130,18,0,52,157,9,159,5,153,7,149,4,0,7,151,5,0,73,150,24,0,144,158,1,147,8,160,2,147,1,130,18,0,53,157,8,159,5,153,7,149,2,0,9,151,5,0,72,150,27,0,142,158,1,147,7,160,4,130,18,0,53,157,8,159,7,153,5,149,2,0,9,151,5,0,8,161,1,0,60,150,31,0,15,162,1,0,125,158,2,147,6,160,4,130,17,0,55,157,7,159,7,153,4,149,3,0,8,151,5,0,67,150,34,0,16,162,1,0,124,158,2,147,1,163,5,160,6,130,14,0,56,157,6,159,9,164,2,149,5,0,7,151,5,0,66,150,36,0,140,158,3,163,6,160,5,130,11,0,59,157,6,159,7,164,5,149,3,0,9,151,4,0,66,150,37,0,138,158,3,163,9,160,5,130,7,0,62,157,5,159,7,164,5,149,3,0,9,151,3,0,66,150,39,0,137,158,2,163,11,160,3,130,6,0,64,157,5,164,1,159,2,164,1,159,2,164,6,149,1,0,12,151,1,0,68,150,39,0,136,158,2,163,11,160,3,163,1,130,5,0,64,157,5,164,1,159,1,164,9,165,1,149,1,0,80,150,40,0,136,158,2,163,14,130,7,0,63,157,5,164,13,0,81,150,40,0,135,158,1,163,14,130,7,0,65,157,4,164,12,0,83,150,39,0,135,158,1,163,13,130,7,0,67,164,10,166,2,164,2,0,84,150,38,0,135,158,2,163,12,167,2,130,6,0,67,164,14,0,84,150,38,0,135,158,1,163,13,167,3,130,3,0,70,164,12,0,86,150,37,0,136,158,1,163,12,167,5,130,1,0,70,164,11,0,87,150,10,0,8,150,18,0,136,158,2,163,11,0,1,167,4,130,1,0,71,164,9,0,89,150,8,0,11,150,2,0,1,150,13,0,137,158,2,163,12,0,1,167,3,0,73,164,1,0,96,150,3,0,16,150,1,0,1,150,14,0,136,158,3,163,13,0,195,150,12,0,23,168,1,0,113,158,2,163,14,0,197,150,10,0,24,168,1,0,111,158,3,163,14,0,197,150,10,0,25,168,1,0,110,158,3,163,13,0,201,150,1,0,1,150,2,0,28,168,3,0,109,158,1,163,10,0,236,168,3,0,109,158,2,163,10,0,237,168,2,0,109,158,2,163,7,0,210,150,3,0,24,168,2,0,1,168,1,0,111,158,1,163,8,0,209,150,3,0,23,168,3,0,113,158,1,163,7,0,211,150,1,0,23,168,3,0,114,158,2,163,6,0,233,168,3,0,114,158,3,163,5,0,234,168,4,0,114,158,3,163,5,0,235,168,2,0,116,158,2,163,6,0,350,158,1,0,1,158,1,163,6,0,352,158,1,163,6,0,137,169,1,0,215,158,2,163,4,0,355,158,2,163,3,0,9,170,2,0,344,158,5,0,355,158,1,0,1,158,1,0,2,163,1,0,356,158,1,0,1,158,1,163,3,0,29,171,1,0,3218,172,1,0,353,172,1,0,2,172,1,0,356,172,2,0,162,172,1,0,193,172,2,0,114,172,7,0,43,172,7,0,4,172,4,0,10,172,2,0,3,172,8,0,24,172,1,0,128,172,3,0,112,172,1,0,2,172,12,0,22,172,61,0,149,172,2,0,1,172,1,0,104,172,29,0,9,172,72,0,136,172,3,0,1,172,6,0,96,172,2,0,5,172,29,0,7,172,84,0,129,172,2,0,1,172,6,0,69,172,3,0,2,172,7,0,2,172,1,0,7,172,40,0,4,172,88,0,1,172,1,0,124,172,5,0,1,172,5,0,50,172,3,0,1,172,7,0,1,172,68,0,3,172,100,0,90,172,3,0,23,172,4,0,2,172,6,0,49,172,79,0,2,172,100,0,64,172,1,0,26,172,15,0,4,172,2,0,1,172,1,0,2,172,1,0,1,172,12,0,45,172,183,0,61,172,1,0,3,172,1,0,8,172,6,0,1,172,2,0,10,172,39,0,43,172,181,0,1,172,1,0,54,172,77,0,43,172,1,0,1,172,181,0,51,172,77,0,41,172,192,0,39,172,7,0,3,172,74,0,40,172,198,0,2,172,3,0,11]};
(function () {
  var EMAIL = ['ramivinit', 'gmail.com'].join('@');   /* assembled at runtime so simple scrapers miss it */
  var CV = 'assets/Vinit_Rami_CV.pdf';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var phone = matchMedia('(max-width: 768px)');
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var toastTimer;
  function toast(msg) {
    var old = $('.toast'); if (old) old.remove();
    var t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t); clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.remove(); }, 2800);
  }
  function copy(text, okMsg, el) {
    function sel() { if (!el) return; var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, function () { sel(); toast('Selected. Press Ctrl+C to copy.'); });
    else { sel(); toast('Selected. Press Ctrl+C to copy.'); }
  }

  /* theme switch: a saved choice wins, otherwise it follows the system setting */
  var root = document.documentElement, themeBtn = $('#themeBtn');
  function themeUi() {
    var light = root.getAttribute('data-theme') === 'light';
    themeBtn.firstElementChild.className = 'ph ' + (light ? 'ph-moon' : 'ph-sun');
    themeBtn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    themeBtn.setAttribute('aria-pressed', String(light));
    $$('meta[name="theme-color"]').forEach(function (m) { m.setAttribute('content', light ? '#F3F5F9' : '#0A0C11'); });
  }
  function setTheme(t, save) {
    root.setAttribute('data-theme', t);
    if (save) { try { localStorage.setItem('vr-theme', t); } catch (e) { /* storage blocked: the choice lasts for this visit */ } }
    themeUi(); document.dispatchEvent(new Event('themechange'));
  }
  themeBtn.addEventListener('click', function () { setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light', true); });
  if (window.matchMedia) {
    var sysLight = matchMedia('(prefers-color-scheme: light)');
    var onSystem = function (e) { var saved = null; try { saved = localStorage.getItem('vr-theme'); } catch (x) { /* ignore */ } if (!saved) setTheme(e.matches ? 'light' : 'dark', false); };
    if (sysLight.addEventListener) sysLight.addEventListener('change', onSystem); else if (sysLight.addListener) sysLight.addListener(onSystem);
  }
  themeUi();

  /* spotlight */
  $$('.tile').forEach(function (el) {
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
  });

  /* the dock: each item grows toward the pointer on a spring (proximity 122, spring .19, damping .7) */
  var dock = $('#dock'), dItems = $$('a', dock).map(function (el) { return { el: el, w: 0, h: 0, v: 0, vel: 0, t: 0 }; });
  var fine = matchMedia('(hover: hover) and (pointer: fine)'), dockOn = false, dockRaf = 0;
  function dockMeasure() {
    dItems.forEach(function (it) { it.el.style.width = it.el.style.height = it.el.style.transform = ''; it.el.dataset.near = 'false'; });
    dItems.forEach(function (it) { var r = it.el.getBoundingClientRect(); it.w = r.width; it.h = r.height; it.v = it.vel = it.t = 0; });
    dockOn = !reduce && fine.matches && innerWidth > 768 && dock.offsetParent !== null;
  }
  function dockTick() {
    var moving = false;
    dItems.forEach(function (it) {
      it.vel += (it.t - it.v) * .19; it.vel *= .7; it.v += it.vel;
      if (Math.abs(it.t - it.v) < .001 && Math.abs(it.vel) < .001) { it.v = it.t; it.vel = 0; } else moving = true;
      var a = Math.max(0, Math.min(1.08, it.v));
      it.el.style.width = (it.w + Math.min(17, it.w * .24) * a).toFixed(2) + 'px';
      it.el.style.height = (it.h + 16 * a).toFixed(2) + 'px';
      it.el.style.transform = 'translateY(' + (3.5 * a).toFixed(2) + 'px)';
    });
    dockRaf = moving ? requestAnimationFrame(dockTick) : 0;
  }
  function kick() { if (!dockRaf) dockRaf = requestAnimationFrame(dockTick); }
  dock.addEventListener('pointermove', function (e) {
    if (!dockOn) return;
    dItems.forEach(function (it) { var r = it.el.getBoundingClientRect(), x = Math.max(0, Math.min(1, 1 - Math.abs(e.clientX - (r.left + r.width / 2)) / 122)); it.t = x * x * (3 - 2 * x); it.el.dataset.near = it.t > .08 ? 'true' : 'false'; });
    kick();
  });
  dock.addEventListener('pointerleave', function () { dItems.forEach(function (it) { it.t = 0; it.el.dataset.near = 'false'; }); kick(); });
  function setOn(id) {
    dItems.forEach(function (it) {
      var on = it.el.dataset.sec === id; it.el.classList.toggle('on', on);
      if (on && dock.scrollWidth > dock.clientWidth) dock.scrollLeft = it.el.offsetLeft - (dock.clientWidth - it.el.offsetWidth) / 2;   /* phones: keep the active pill in view */
    });
  }
  dItems.forEach(function (it) { it.el.addEventListener('click', function () { setOn(it.el.dataset.sec); }); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(dockMeasure); else dockMeasure();
  window.addEventListener('resize', dockMeasure);
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) setOn(e.target.id); }); }, { rootMargin: '-45% 0px -50% 0px' });
    ['home', 'experience', 'education', 'skills', 'contact'].forEach(function (id) { var el = document.getElementById(id); if (el) spy.observe(el); });
  }

  /* typed role */
  var roles = ['Cybersecurity Analyst', 'Phishing Hunter', 'Pentester turned Defender'], typed = $('#typed');
  if (!reduce) {
    var ri = 0, ci = roles[0].length, del = true;
    setTimeout(function step() {
      if (del) { ci--; if (ci <= 0) { del = false; ri = (ri + 1) % roles.length; } }
      else { ci++; if (ci >= roles[ri].length) { del = true; typed.textContent = roles[ri]; return setTimeout(step, 2200); } }
      typed.textContent = roles[ri].slice(0, Math.max(ci, 0));
      setTimeout(step, del ? 38 : 70);
    }, 2400);
  }

  /* count-ups */
  function countUp(el, to, fmt, ms) {
    if (reduce) return; var t0 = null;
    requestAnimationFrame(function tick(ts) { if (!t0) t0 = ts; var p = Math.min(1, (ts - t0) / ms), e = 1 - Math.pow(1 - p, 3); el.textContent = fmt(to * e); if (p < 1) requestAnimationFrame(tick); });
  }
  var count = $('#count'); countUp(count, 81.4, function (v) { return v.toFixed(1) + '%'; }, 1400);
  if ('IntersectionObserver' in window) {
    var seen = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (!e.isIntersecting) return; seen.unobserve(e.target);
        $$('b[data-n]', e.target).forEach(function (b) { var n = +b.dataset.n, s = b.dataset.s; countUp(b, n, function (v) { return Math.round(v).toLocaleString('en-GB') + s; }, 1200); }); });
    }, { threshold: .4 });
    seen.observe($('#numbers'));
  }
  $$('.viz').forEach(function (v) { for (var k = 0; k < +v.dataset.count; k++) { var i = document.createElement('i'); if (v.classList.contains('tests')) i.style.height = (18 + (k % 4) * 4 + (k * 7 % 5)) + 'px'; v.appendChild(i); } });
  if ('IntersectionObserver' in window && !reduce) {
    var vizSeen = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; vizSeen.unobserve(e.target);
        var ring = $('#ring'); ring.style.transition = 'none'; ring.style.strokeDashoffset = '113.1'; void ring.getBoundingClientRect(); ring.style.transition = ''; ring.style.strokeDashoffset = '67.86';
        $$('.viz', e.target).forEach(function (v) {
          var dots = $$('i', v); dots.forEach(function (d) { d.style.opacity = '.12'; d.style.transform = 'scale(.6)'; });
          dots.forEach(function (d, k) { setTimeout(function () { d.style.opacity = ''; d.style.transform = ''; }, 120 + k * (900 / dots.length)); });
        });
      });
    }, { threshold: .4 });
    vizSeen.observe($('#numbers'));
  }

  /* carousels */
  $$('.carousel').forEach(function (car, n) {
    var imgs = $$('img', car), bars = $('.bars', car), i = 0, timer = null, tile = car.closest('.tool');
    imgs.forEach(function () { bars.appendChild(document.createElement('span')); });
    var segs = $$('span', bars);
    function dur() { return phone.matches ? 2500 : 3800; }
    function paint() {
      imgs.forEach(function (im, k) { im.classList.toggle('on', k === i); });
      segs.forEach(function (s, k) { s.className = k < i ? 'done' : ''; }); void bars.offsetWidth;
      if (!reduce) { segs[i].style.setProperty('--dur', dur() + 'ms'); segs[i].className = 'run'; } else segs[i].className = 'done';
    }
    function start() { stop(); if (!reduce) timer = setTimeout(function loop() { i = (i + 1) % imgs.length; paint(); timer = setTimeout(loop, dur()); }, dur()); }
    function stop() { clearTimeout(timer); timer = null; }
    paint(); setTimeout(start, n * 700);
    tile.addEventListener('mouseenter', function () { if (!phone.matches) { stop(); tile.classList.add('paused'); } });
    tile.addEventListener('mouseleave', function () { if (!phone.matches) { tile.classList.remove('paused'); paint(); start(); } });
    tile.addEventListener('focusin', function () { stop(); tile.classList.add('paused'); });
    tile.addEventListener('focusout', function () { tile.classList.remove('paused'); paint(); start(); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else { paint(); start(); } });
  });

  /* 0 and 1 rain in two depths: far and dim, near and bright with a glowing head */
  function rain(canvas, opts) {
    var ctx = canvas.getContext('2d'), w = 0, h = 0, raf = 0, last = 0, running = false, tick = 0;
    var layers = (opts.layers || [{ size: 16, alpha: 1, every: 1 }]).map(function (l) { return { size: l.size, alpha: l.alpha, every: l.every, cols: [] }; });
    function seed() {
      layers.forEach(function (L) { var n = Math.ceil(w / L.size); L.cols = []; for (var k = 0; k < n; k++) L.cols.push(opts.fill ? Math.random() * h / L.size : Math.random() * -h / L.size); });
    }
    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2), r = canvas.getBoundingClientRect();
      w = r.width; h = r.height; canvas.width = Math.max(1, w * dpr); canvas.height = Math.max(1, h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = opts.bg; ctx.fillRect(0, 0, w, h); seed();
      if (opts.fill) for (var s = 0; s < 30; s++) frame();
    }
    function frame() {
      tick++; ctx.fillStyle = opts.fade; ctx.fillRect(0, 0, w, h);
      layers.forEach(function (L) {
        if (tick % L.every) return;
        ctx.font = L.size + 'px "Geist Mono", monospace';
        for (var k = 0; k < L.cols.length; k++) {
          var y = L.cols[k] * L.size, ch = Math.random() < .5 ? '0' : '1';
          ctx.globalAlpha = L.alpha;
          ctx.fillStyle = opts.color; ctx.fillText(Math.random() < .5 ? '0' : '1', k * L.size, y - L.size);
          ctx.fillStyle = '#E9FFF4'; ctx.fillText(ch, k * L.size, y);
          if (y > h && Math.random() > .97) L.cols[k] = 0; else L.cols[k] += 1;
        }
      });
      ctx.globalAlpha = 1;
    }
    function loop(ts) { if (!running) return; if (ts - last > (api.ms || 55)) { frame(); last = ts; } raf = requestAnimationFrame(loop); }
    var api = {
      ms: opts.ms || 55,
      start: function () { if (reduce || running) return; running = true; raf = requestAnimationFrame(loop); },
      stop: function () { running = false; cancelAnimationFrame(raf); },
      clear: function () { ctx.clearRect(0, 0, w, h); }
    };
    resize(); window.addEventListener('resize', resize);
    return api;
  }
  var tileEl = $('#termTile');
  var tileRain = rain($('#rain'), { bg: '#04070A', fade: 'rgba(4,7,10,0.18)', color: '#34E39A', fill: true, ms: 60,
    layers: [{ size: 11, alpha: .35, every: 2 }, { size: 16, alpha: .95, every: 1 }] });
  tileEl.addEventListener('mouseenter', function () { tileRain.ms = 30; });
  tileEl.addEventListener('mouseleave', function () { tileRain.ms = 60; });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting && !document.hidden ? tileRain.start() : tileRain.stop(); }); }).observe(tileEl);
  } else tileRain.start();
  var fab = $('#fab'), launching = false, atTop = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { atTop = es[0].isIntersecting; if (!launching) fab.classList.toggle('away', atTop); }).observe($('.intro'));
  } else fab.classList.remove('away');
  fab.addEventListener('click', function () {
    if (reduce) { window.scrollTo(0, 0); return; }
    if (launching) return; launching = true;
    var r = fab.getBoundingClientRect(), fly = document.createElement('div'), bird = $('.owl', fab).cloneNode(true);
    fly.className = 'flyer'; fly.style.left = (r.left + r.width / 2 - 20) + 'px'; fly.style.top = (r.top + r.height / 2 - 19) + 'px';
    bird.classList.remove('awake'); fly.appendChild(bird); document.body.appendChild(fly); fab.classList.add('hide');
    setTimeout(function () { bird.classList.add('awake'); }, 140);                       /* eyes open */
    fly.animate([{ transform: 'translateY(0) scale(1)' }, { transform: 'translateY(2px) scale(1.06, .92)', offset: .45 }, { transform: 'translateY(-8px) scale(1.12)' }],
      { duration: 380, easing: 'ease-out', fill: 'forwards' }).onfinish = function () {      /* a little crouch and hop */
      bird.classList.add('flap');
      var up = r.top + 90;
      fly.animate([
        { transform: 'translate(0, -8px) scale(1.12) rotate(0deg)' },
        { transform: 'translate(-16px, ' + (-up * .28) + 'px) scale(1.12) rotate(-7deg)', offset: .3 },
        { transform: 'translate(12px, ' + (-up * .62) + 'px) scale(1.12) rotate(6deg)', offset: .64 },
        { transform: 'translate(-4px, ' + (-up - 30) + 'px) scale(1.12) rotate(-2deg)' }
      ], { duration: 1250, easing: 'cubic-bezier(.42,0,.58,1)', fill: 'forwards' }).onfinish = function () {
        fly.remove(); fab.classList.add('instant'); fab.classList.remove('hide'); fab.classList.toggle('away', atTop); void fab.offsetWidth; fab.classList.remove('instant'); launching = false;
      };
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  });
  document.addEventListener('visibilitychange', function () { document.hidden ? tileRain.stop() : tileRain.start(); });

  /* the mini terminal inside the tile types on its own */
  var mini = $('#mini');
  var script = [['whoami', 'vinit rami, cybersecurity analyst'], ['phishhawk scan reported.eml', 'verdict: LIKELY PHISHING (risk 8)'],
    ['owltriage hunt auth.log', '32 findings, 17 ATT&CK techniques'], ['cat flag.txt', 'permission denied. open the terminal.'], ['nmap vinitrami.co.in', '443/tcp open  ambition']];
  function miniLine(cls, text) { var s = document.createElement('span'); s.className = cls; s.textContent = text; mini.appendChild(s); while (mini.children.length > 6) mini.removeChild(mini.firstChild); return s; }
  if (reduce) { script.slice(0, 3).forEach(function (p) { miniLine('pr', '$ ' + p[0]); miniLine('ou', p[1]); }); }
  else {
    var si = 0;
    (function run() {
      var p = script[si % script.length], line = miniLine('pr', '$ '), cur = document.createElement('i'), k = 0; cur.className = 'cur'; line.appendChild(cur);
      (function type() {
        if (k < p[0].length) { line.firstChild.nodeValue = '$ ' + p[0].slice(0, ++k); return setTimeout(type, 45 + Math.random() * 40); }
        setTimeout(function () { cur.remove(); miniLine('ou', p[1]); si++; setTimeout(run, 1500); }, 320);
      })();
    })();
  }

  var burst = $('#burst');
  function matrixBurst() {
    if (reduce) return;
    burst.hidden = false; var b = rain(burst, { bg: 'rgba(0,0,0,0)', fade: 'rgba(5,8,12,0.10)', color: '#34E39A', ms: 40, layers: [{ size: 18, alpha: 1, every: 1 }] });
    b.start(); setTimeout(function () { b.stop(); b.clear(); burst.hidden = true; }, 2600);
  }

  /* modal shell */
  var mScrim = $('#modalScrim'), mBody = $('#mBody'), lastFocus = null;
  function trap(scrim, e) {
    if (e.key !== 'Tab') return;
    var f = $$('button, a[href], input', scrim).filter(function (x) { return x.offsetParent !== null; });
    if (!f.length) return; var a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  }
  function openModal(html) { if (mScrim.hidden) lastFocus = document.activeElement; mBody.innerHTML = html; mScrim.hidden = false; var f = $('[data-first]', mBody) || $('button', mBody); if (f) f.focus(); }
  function closeModal() { mScrim.hidden = true; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  $('#mClose').addEventListener('click', closeModal);
  mScrim.addEventListener('click', function (e) { if (e.target === mScrim) closeModal(); });
  mScrim.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); trap(mScrim, e); });

  /* CV: an identity check first */
  var cvLink = '<a class="btn pri" data-first href="' + CV + '" download="Vinit_Rami_CV.pdf"><i class="ph ph-download-simple" aria-hidden="true"></i>Download CV</a>';
  var cvReplies = {
    hr: ['ACCESS GRANTED', 'Identity verified. Welcome!', 'Please handle this CV with care. It\'s been through an entire MSc.'],
    hacker: ['RED TEAM DETECTED', 'Nice try, hacker.', 'Your disguise needs work. I\'ve reported you to the SOC, which is also me. Just kidding, nothing was logged. Here it is anyway.'],
    engineer: ['RESPECT', 'Fellow engineer, welcome.', 'Take the CV, then press ~ for the terminal. There\'s a flag hidden in there.']
  };
  function cvAsk() {
    openModal('<div class="tag">ACCESS REQUEST: Vinit_Rami_CV.pdf</div><h3 id="mTitle">Before I hand this over: are you HR, or a hacker in disguise?</h3><p>Security policy. You understand.</p><div class="row">' +
      '<button class="btn pri choice" data-first data-who="hr" type="button">I\'m HR</button><button class="btn sec choice" data-who="hacker" type="button">Hacker in disguise</button>' +
      '<button class="btn sec choice" data-who="engineer" type="button">Curious engineer</button></div>');
    $$('[data-who]', mBody).forEach(function (b) {
      b.addEventListener('click', function () {
        var r = cvReplies[b.dataset.who];
        openModal('<div class="tag ' + (b.dataset.who === 'hacker' ? 'bad' : 'ok') + '">' + r[0] + '</div><h3 id="mTitle">' + r[1] + '</h3><p>' + r[2] + '</p><div class="row">' + cvLink + '</div>');
        if (b.dataset.who === 'hacker') matrixBurst();
      });
    });
  }
  /* email: are you sure? */
  function emailAsk() {
    openModal('<div class="tag">OUTBOUND MESSAGE</div><h3 id="mTitle">Are you sure?</h3><p>Emailing a cybersecurity analyst means your email gets checked for phishing first. Every link. Every attachment.</p><div class="row">' +
      '<button class="btn pri choice" data-first id="sure" type="button">Yes, I\'m sure</button><button class="btn sec choice" id="nah" type="button">Let me think</button></div>');
    $('#nah', mBody).addEventListener('click', function () { closeModal(); toast('No pressure. The inbox stays open.'); });
    $('#sure', mBody).addEventListener('click', function () {
      openModal('<div class="tag ok">VERDICT: CLEAN</div><h3 id="mTitle">Just kidding. Welcome!</h3><p>PhishHawk has already cleared you. Write to me here. I reply within a day.</p>' +
        '<div class="addr"><code>' + EMAIL + '</code><button class="btn sec sm" id="copy" data-first type="button"><i class="ph ph-copy" aria-hidden="true"></i>Copy</button></div>' +
        '<div class="row"><a class="btn pri" href="mailto:' + EMAIL + '?subject=' + encodeURIComponent('Cybersecurity role') + '"><i class="ph ph-envelope-simple" aria-hidden="true"></i>Open mail app</a></div>');
      $('#copy', mBody).addEventListener('click', function () { copy(EMAIL, 'Email address copied.', $('code', mBody)); });
    });
  }
  /* North Korea gets an auto-reply */
  function nkNope() {
    openModal('<div class="tag bad">AUTO-REPLY</div><h3 id="mTitle">Sorry, I\'m not available.</h3><p>I don\'t want to give up my role as a restaurant waiter. LOL.</p>' +
      '<div class="row"><button class="btn pri choice" data-first id="nkOk" type="button">Fair enough</button></div>');
    $('#nkOk', mBody).addEventListener('click', function () { closeModal(); toast('Try India, Singapore or the UK instead.'); });
  }
  document.addEventListener('click', function (e) { if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return; var b = e.target.closest && e.target.closest('[data-open]'); if (!b) return; e.preventDefault(); var o = b.dataset.open; o === 'cv' ? cvAsk() : o === 'nk' ? nkNope() : emailAsk(); });
  $('#copyId').addEventListener('click', function () { copy('ECC7846195302', 'Credential ID copied. Verify it with EC-Council.', $('.cert.top .id span')); });

  /* arsenal tabs */
  $$('.tabs button').forEach(function (t) {
    t.addEventListener('click', function () {
      $$('.tabs button').forEach(function (x) { x.classList.toggle('on', x === t); x.setAttribute('aria-selected', x === t); });
      var g = t.dataset.tab, k = 0;
      $$('#chips span').forEach(function (s) {
        var show = g === 'all' || s.dataset.g === g; s.classList.toggle('off', !show); s.classList.remove('pop');
        if (show) { void s.offsetWidth; s.style.setProperty('--d', (k++ * 30) + 'ms'); s.classList.add('pop'); }
      });
    });
  });

  /* terminal */
  var tScrim = $('#termScrim'), out = $('#tOut'), input = $('#tIn'), hist = [], hp = -1, tLast = null, snapping = false;
  function print(html) { var d = document.createElement('div'); d.innerHTML = html; out.appendChild(d); out.scrollTop = out.scrollHeight; }
  function greet() { print('<span class="c">Vinit Rami · interactive terminal</span>'); print('<span class="d">Type</span> <span class="g">help</span> <span class="d">to see the commands. Tab completes.</span>'); print('&nbsp;'); }
  function openTerm(from) { tLast = from || document.activeElement; tScrim.hidden = false; if (!out.children.length) greet(); setTimeout(function () { input.focus(); }, 40); }
  function closeTerm() { tScrim.hidden = true; if (tLast && tLast.focus) tLast.focus(); }
  $('#tClose').addEventListener('click', closeTerm);
  tScrim.addEventListener('click', function (e) { if (e.target === tScrim) closeTerm(); });
  tScrim.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeTerm(); trap(tScrim, e); });
  tileEl.addEventListener('click', function () { tileEl.classList.remove('glitch'); void tileEl.offsetWidth; tileEl.classList.add('glitch'); setTimeout(function () { openTerm(tileEl); }, reduce ? 0 : 280); });


  /* clear: the snap. Every character on screen turns to dust and drifts away. */
  function snap() {
    if (reduce || !out.children.length) { out.innerHTML = ''; return; }
    snapping = true;
    var lines = Array.prototype.slice.call(out.children), box = out.getBoundingClientRect();
    lines.forEach(function (ln) { var r = ln.getBoundingClientRect(); if (r.bottom < box.top || r.top > box.bottom) ln.style.visibility = 'hidden'; });
    var walker = document.createTreeWalker(out, NodeFilter.SHOW_TEXT), nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    var chars = [];
    nodes.forEach(function (tn) {
      var parent = tn.parentNode; if (!parent || parent.closest('[style*="hidden"]')) return;
      var frag = document.createDocumentFragment();
      Array.prototype.forEach.call(tn.nodeValue, function (c) { var s = document.createElement('span'); s.className = 'ch'; s.textContent = c; frag.appendChild(s); chars.push(s); });
      parent.replaceChild(frag, tn);
    });
    chars.forEach(function (s) {
      var r = s.getBoundingClientRect(), fx = (r.left - box.left) / Math.max(1, box.width);
      s.style.setProperty('--dx', (40 + Math.random() * 150) + 'px');
      s.style.setProperty('--dy', (-70 + Math.random() * 60) + 'px');
      s.style.setProperty('--rt', (-50 + Math.random() * 100) + 'deg');
      s.style.setProperty('--dl', Math.round(fx * 700 + Math.random() * 650) + 'ms');
    });
    out.classList.add('dust'); void out.offsetWidth; out.classList.add('go');
    setTimeout(function () { out.classList.remove('dust', 'go'); out.innerHTML = ''; snapping = false; }, 2900);
  }

  var cmds = {
    help: function () {
      [['whoami', 'who is this guy?'], ['skills', 'dump the arsenal'], ['certs', 'verified credentials'], ['projects', 'the three tools'],
       ['contact', 'open a channel'], ['cv', 'download the CV'], ['nmap', 'scan this portfolio'], ['phish', 'run PhishHawk on a sample'],
       ['matrix', 'you know what this does'], ['theme', 'switch light and dark'], ['sudo hire-vinit', 'you know you want to'], ['clear', 'snap the screen away'], ['exit', 'close']]
        .forEach(function (c) { print('&nbsp;&nbsp;<span class="g">' + c[0] + '</span>' + '&nbsp;'.repeat(Math.max(1, 17 - c[0].length)) + '<span class="d">' + c[1] + '</span>'); });
    },
    whoami: function () {
      print('<span class="c">Vinit Rami</span> · Cybersecurity Analyst · CEH v13');
      print('Trained in offence (VAPT), focused on defence (detection and DFIR)');
      print('MSc Cyber Security and Forensic IT, <span class="g">Merit</span>, University of Portsmouth <span class="d">[2026]</span>');
      print('<span class="d">"Every log tells a story. I read the boring ones twice."</span>');
    },
    skills: function () {
      print('<span class="r">[red team]</span>&nbsp;&nbsp;Burp Suite Pro, Metasploit, OWASP Top 10, API security testing');
      print('<span class="c">[blue team]</span>&nbsp;SIEM (Wazuh), log analysis, incident response');
      print('<span class="g">[forensics]</span>&nbsp;Autopsy, Volatility, memory, disk and mobile forensics');
      print('<span class="d">[stack]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python, Bash, Wireshark, Nmap, Nessus, MITRE ATT&amp;CK');
    },
    certs: function () {
      [['CEH v13 · EC-Council <span class="d">(ECC7846195302)</span>', 1], ['Digital Forensics Essentials · EC-Council', 0], ['SQL Injection Attacks · EC-Council', 1],
       ['Network Defense Essentials · EC-Council', 0], ['Ethical Hacking Essentials · EC-Council', 1], ['Introduction to Dark Web, Anonymity and Cryptocurrency · EC-Council', 0]]
        .forEach(function (c) { print('<span class="' + (c[1] ? 'r' : 'c') + '">[✓]</span> ' + c[0] + ' <span class="d">' + (c[1] ? 'red team' : 'blue team') + '</span>'); });
    },
    projects: function () {
      print('<span class="g">phishhawk</span>&nbsp;&nbsp;live phishing triage &nbsp;<a href="https://phishhawk.vinitrami.co.in" target="_blank" rel="noopener noreferrer">phishhawk.vinitrami.co.in</a>');
      print('<span class="g">intelpulse</span> threat-intel verdicts <a href="https://vinitrami-soc.github.io/intelpulse/" target="_blank" rel="noopener noreferrer">demo</a> · <a href="https://github.com/vinitrami-Soc/intelpulse" target="_blank" rel="noopener noreferrer">github</a>');
      print('<span class="g">owltriage</span>&nbsp;&nbsp;offline log triage &nbsp;&nbsp;&nbsp;<a href="https://github.com/vinitrami-Soc/owltriage" target="_blank" rel="noopener noreferrer">github</a>');
    },
    contact: function () {
      print('email&nbsp;&nbsp;&nbsp;&nbsp;' + EMAIL);
      print('linkedin&nbsp;<a href="https://www.linkedin.com/in/vinitrami-002855228" target="_blank" rel="noopener noreferrer">/in/vinitrami-002855228</a>');
      print('github&nbsp;&nbsp;&nbsp;<a href="https://github.com/vinitrami-Soc" target="_blank" rel="noopener noreferrer">@vinitrami-Soc</a>');
      print('medium&nbsp;&nbsp;&nbsp;<a href="https://medium.com/@ramivinit" target="_blank" rel="noopener noreferrer">@ramivinit</a>');
    },
    cv: function () { print('<span class="a">Access request detected.</span> Opening the security check…'); setTimeout(function () { closeTerm(); cvAsk(); }, 600); },
    nmap: function () {
      ['<span class="d">Starting Nmap 7.95 against vinitrami.co.in</span>', 'PORT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATE&nbsp;&nbsp;SERVICE',
       '22/tcp&nbsp;&nbsp;&nbsp;<span class="r">closed</span> ssh <span class="d">(nice try)</span>', '443/tcp&nbsp;&nbsp;<span class="g">open</span>&nbsp;&nbsp;&nbsp;portfolio',
       '1337/tcp&nbsp;<span class="g">open</span>&nbsp;&nbsp;&nbsp;ctf-mode', '8080/tcp&nbsp;<span class="g">open</span>&nbsp;&nbsp;&nbsp;ambition', '<span class="d">Nmap done: 1 analyst up</span>']
        .forEach(function (l, k) { setTimeout(function () { print(l); }, reduce ? 0 : k * 180); });
    },
    phish: function () {
      ['<span class="d">$ phishhawk scan samples/sample_quishing.eml --offline</span>', 'Auth&nbsp;&nbsp;&nbsp;&nbsp;: spf=pass dkim=pass dmarc=pass',
       'Lookalike: example-corp-mfa[.]top <span class="a">combosquat of YOUR domain</span>', 'QR code&nbsp;: MFA_Enrolment_Notice.pdf -> hxxps://example-corp-mfa[.]top/enrol',
       '<span class="r">[high]</span> sender domain is a lookalike', '<span class="r">[high]</span> QR code links to a lookalike', '<span class="a">Verdict: LIKELY PHISHING (risk score 8)</span>']
        .forEach(function (l, k) { setTimeout(function () { print(l); }, reduce ? 0 : k * 220); });
    },
    matrix: function () { print('<span class="g">Wake up, recruiter…</span>'); matrixBurst(); },
    ls: function () { print('about.md&nbsp;&nbsp;experience.log&nbsp;&nbsp;tools/&nbsp;&nbsp;credentials.db&nbsp;&nbsp;<span class="d">flag.txt</span>'); },
    date: function () { print(esc(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(new Date()))); },
    history: function () { hist.forEach(function (h, k) { print('<span class="d">' + (k + 1) + '</span>&nbsp;&nbsp;' + esc(h)); }); },
    clear: snap, snap: snap,
    theme: function () { var t = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'; setTheme(t, true); print('<span class="g">Theme set to ' + t + '.</span>'); },
    exit: function () { closeTerm(); }
  };
  cmds['sudo hire-vinit'] = function () { print('<span class="g">[sudo] permission granted.</span>'); print('Drafting the offer letter…'); setTimeout(function () { closeTerm(); emailAsk(); }, 800); };
  var names = Object.keys(cmds).concat(['cat flag.txt', 'sudo']);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      var v = input.value.toLowerCase(), m = names.filter(function (n) { return v && n.indexOf(v) === 0; });
      if (m.length === 1) { e.preventDefault(); input.value = m[0]; } else if (m.length > 1) { e.preventDefault(); print('<span class="d">' + m.join('&nbsp;&nbsp;') + '</span>'); }
      return;
    }
    if (e.key === 'ArrowUp') { if (hist.length) { hp = hp < 0 ? hist.length - 1 : Math.max(0, hp - 1); input.value = hist[hp]; } e.preventDefault(); return; }
    if (e.key === 'ArrowDown') { if (hp >= 0) { hp++; if (hp >= hist.length) { hp = -1; input.value = ''; } else input.value = hist[hp]; } e.preventDefault(); return; }
    if (e.key !== 'Enter' || snapping) return;
    var raw = input.value.trim(); input.value = ''; if (!raw) return;
    hist.push(raw); hp = -1;
    print('<span class="g">guest@vinit:~$</span> ' + esc(raw));
    var low = raw.toLowerCase(), p = low.split(/\s+/);
    if (Object.prototype.hasOwnProperty.call(cmds, low)) return cmds[low]();
    if (p[0] === 'cat' && low.indexOf('flag') > -1) return print('<span class="g">flag{y0u_4ctu4lly_ch3ck3d_n1c3}</span> <span class="d">Mention it in your email.</span>');
    if (p[0] === 'sudo') return print('<span class="r">guest is not in the sudoers file. This incident will be reported.</span> <span class="d">(To me. Hi.)</span>');
    if (low.indexOf('rm -rf') === 0) return print('<span class="r">Permission denied.</span> <span class="d">This portfolio has backups. And a SOC.</span>');
    if (p[0] === 'hack' || p[0] === 'hacker') return print('<span class="a">Access denied.</span> <span class="d">Nice try. Catching hackers is literally my job.</span>');
    if (p[0] === 'echo') return print(esc(raw.slice(5)));
    print('<span class="r">command not found:</span> ' + esc(p[0]) + ' <span class="d">try</span> <span class="g">help</span>');
  });

  /* world map: one dot per degree, each country in its flag's colours. Three countries have stories, the rest have opinions. */
  var M = WORLD, cells = new Uint16Array(M.cols * M.rows);
  (function () { var p = 0; for (var k = 0; k < M.rle.length; k += 2) { cells.fill(M.rle[k], p, p + M.rle[k + 1]); p += M.rle[k + 1]; } })();
  function idxOf(id) { return M.ids.indexOf(id) + 1; }
  var IN = idxOf('356'), UK = idxOf('826');
  var PLACES = {
    IN: { lat: 22.31, lon: 73.18, label: 'Vadodara', title: 'India', sub: 'Vadodara, 2021 to 2025', items: [
      ['2021 - 2025', 'B.Tech Cybersecurity and Networking', 'ITM SLS Baroda University'],
      ['2024 - 2025', 'VAPT Analyst, 7HillsCyberWall', 'Finance, healthcare and government clients'],
      ['2024 - 2026', 'Researcher, ITMBU Cyber Crime Cell', 'Workshops for 200+ students'],
      ['2024', 'Awareness Intern, Urmi School', 'Taught cyber awareness, Python and Java'],
      ['Nov 2024', 'CEH v13', 'EC-Council certified ethical hacker']] },
    SG: { lat: 1.35, lon: 103.82, label: 'Singapore', title: 'Singapore', sub: 'August 2023', items: [
      ['Aug 2023', 'Research Intern, Singapore Institute of Technology', 'Machine learning to predict solar power output'],
      ['Lesson', 'My first real research', 'Data that did not behave, and documentation to a university standard']] },
    UK: { lat: 51.0, lon: -0.9, label: 'Portsmouth, London', title: 'United Kingdom', sub: 'Portsmouth and London, 2025 to now', items: [
      ['2025 - 2026', 'MSc Cyber Security and Forensic IT', 'University of Portsmouth, awarded with Merit'],
      ['2026', 'PhishHawk, IntelPulse, OwlTriage', 'My dissertation became a live app, then two more tools'],
      ['2025 - 2026', 'Mock court hearing, AWS events', 'Cyber Security Leaders Summit, Birmingham'],
      ['Now', 'Based in London', 'Open to cybersecurity analyst and intern roles']] }
  };
  var JOKES = {
    '408': "North Korea? Thanks, but I'd rather work in a restaurant.",
    '156': "China? Sorry, I'm not the CEO of NVIDIA.",
    '010': "Antarctica? Are you a penguin? Penguins like fish, not phish, and none of them has offered me a job yet.",
    '643': "Hello, my Russian hacker friends! I hear you love two Vs: vodka and vulnerability exploitation.",
    '840': "The USA? Could I get an H-1B visa, or at least a job offer, after GTA 6 comes out but before GTA 7?",
    '586': "Pakistan? Proud Indian here, so let's settle this the usual way: a cricket match. The winner sponsors my visa.",
    '124': "Canada? Polite, cold and, I hope, sponsoring visas.",
    '036': "Australia, where everything wants to bite you, including the malware.",
    '276': "Germany? I'd learn German for the right SOC team. Probably.",
    '250': "France? I can say bonjour and run Nmap. Is that enough?",
    '392': "Japan? I'll bring the incident reports if you bring the ramen.",
    '076': "Brazil? Only if the SOC team plays football on Fridays.",
    '372': "Ireland? It's a short flight from London. Do you sponsor visas?",
    '304': "Greenland? Even the ice isn't hiring there."
  };
  var GENERIC = ["{c}? Are you offering visa sponsorship? I'm very open to it.", "I've never been to {c}. Does this click come with a job offer?",
    "{c} looks lovely from here. Do you sponsor visas?", "{c}, noted. Should I pack my bags, or is the role remote?"];
  var OCEAN = ["That's the ocean. It's good for exports and fishing, not phishing and exploitation."];

  /* flag colours. h: bands top to bottom, v: bands left to right, m: a mix, d: field and disc, br: Brazil, us: stars and stripes */
  var K = '#5C5C5C', W = '#FFFFFF';
  var FLAGS = {
    '356': ['h', '#FF9933', W, '#138808'], '826': ['m', '#C8102E', W, '#012169', '#012169'], '840': ['us'], '643': ['h', W, '#0039A6', '#D52B1E'],
    '156': ['cn', '#EE1C25', '#FFDE00'], '276': ['h', K, '#DD0000', '#FFCE00'], '250': ['v', '#0055A4', W, '#EF4135'], '380': ['v', '#009246', W, '#CE2B37'],
    '372': ['v', '#169B62', W, '#FF883E'], '724': ['h', '#AA151B', '#F1BF00', '#F1BF00', '#AA151B'], '620': ['v', '#006600', '#FF0000', '#FF0000'],
    '528': ['h', '#AE1C28', W, '#21468B'], '056': ['v', K, '#FDDA24', '#EF3340'], '616': ['h', W, '#DC143C'], '804': ['h', '#0057B7', '#FFD700'],
    '752': ['m', '#006AA7', '#006AA7', '#FECC00'], '578': ['m', '#BA0C2F', '#BA0C2F', W, '#00205B'], '246': ['m', W, W, '#003580'],
    '208': ['m', '#C8102E', '#C8102E', W], '352': ['m', '#02529C', '#02529C', W, '#DC1E35'], '040': ['h', '#ED2939', W, '#ED2939'],
    '756': ['m', '#DA291C', '#DA291C', W], '300': ['h', '#0D5EAF', W, '#0D5EAF', W, '#0D5EAF'], '792': ['m', '#E30A17', '#E30A17', '#E30A17', W],
    '392': ['d', W, '#BC002D'], '410': ['m', W, W, '#CD2E3A', '#0047A0'], '408': ['h', '#024FA2', '#ED1C27', '#ED1C27', '#024FA2'],
    '050': ['d', '#006A4E', '#F42A41'], '586': ['v', W, '#01411C', '#01411C', '#01411C'], '524': ['m', '#DC143C', '#DC143C', '#003893'],
    '144': ['m', '#FFBE29', '#8D153A', '#8D153A', '#00534E', '#EB7400'], '360': ['h', '#FF0000', W], '458': ['h', '#CC0001', W, '#CC0001', W, '#010066'],
    '764': ['h', '#A51931', W, '#2D2A4A', '#2D2A4A', W, '#A51931'], '704': ['d', '#DA251D', '#FFFF00'], '608': ['h', '#0038A8', '#CE1126'],
    '036': ['m', '#012169', '#012169', '#012169', W, '#E4002B'], '554': ['m', '#012169', '#012169', '#C8102E', W], '124': ['v', '#D80621', W, W, '#D80621'],
    '484': ['v', '#006847', W, '#CE1126'], '076': ['br'], '032': ['h', '#74ACDF', W, '#74ACDF'], '152': ['h', W, '#D52B1E'],
    '170': ['h', '#FCD116', '#FCD116', '#003893', '#CE1126'], '604': ['v', '#D91023', W, '#D91023'], '862': ['h', '#FFCC00', '#00247D', '#CF142B'],
    '710': ['m', '#007A4D', '#FFB612', '#DE3831', '#002395', W], '566': ['v', '#008751', W, '#008751'], '818': ['h', '#CE1126', W, K],
    '682': ['m', '#006C35', '#006C35', '#006C35', W], '784': ['h', '#00732F', W, K], '364': ['h', '#239F40', W, '#DA0000'], '368': ['h', '#CE1126', W, K],
    '004': ['v', K, '#D32011', '#007A36'], '398': ['m', '#00AFCA', '#00AFCA', '#00AFCA', '#FEC50C'], '496': ['v', '#C4272F', '#015197', '#C4272F'],
    '012': ['v', '#006233', W], '504': ['m', '#C1272D', '#C1272D', '#C1272D', '#006233'], '231': ['h', '#078930', '#FCDD09', '#DA121A'],
    '404': ['h', K, '#BB0000', '#006600'], '180': ['m', '#007FFF', '#007FFF', '#CE1021', '#F7D618'], '304': ['h', W, '#C8102E'],
    '010': ['m', '#DDEFFF', '#BFDDF7', '#FFFFFF'], '762': ['h', '#CC0000', W, '#006600'], '860': ['h', '#0099B5', W, '#1EB53A'],
    '434': ['h', '#E70013', K, '#239E46'], '788': ['m', '#E70013', '#E70013', W], '729': ['h', '#D21034', W, K], '024': ['h', '#CC092F', K],
    '508': ['m', '#007168', '#FCE100', '#D21034', K], '834': ['m', '#1EB53A', '#00A3DD', '#FCD116', K], '894': ['m', '#198A00', '#198A00', '#DE2010', '#EF7D00'],
    '716': ['h', '#319208', '#FFD200', '#DE2010', K, '#DE2010', '#FFD200', '#319208'], '068': ['h', '#D52B1E', '#F9E300', '#007934'],
    '600': ['h', '#D52B1E', W, '#0038A8'], '858': ['h', W, '#0038A8', W, '#0038A8'], '218': ['h', '#FFDD00', '#FFDD00', '#034EA2', '#ED1C24']
  };
  var box = $('#mapBox'), sc = $('#mapScroll'), view = $('#mapView'), cv = $('#mapCanvas'), ctx = cv.getContext('2d'), tip = $('#tip'), place = $('#place'), slider = $('#mapSlider');
  var bbox = {}, colour = new Array(cells.length), hover = 0, sel = 0, selPlace = null, z = 1;
  for (var rr = 0; rr < M.rows; rr++) for (var cc = 0; cc < M.cols; cc++) {
    var vv = cells[rr * M.cols + cc]; if (!vv) continue;
    var bb = bbox[vv] || (bbox[vv] = [rr, rr, cc, cc]); if (rr < bb[0]) bb[0] = rr; if (rr > bb[1]) bb[1] = rr; if (cc < bb[2]) bb[2] = cc; if (cc > bb[3]) bb[3] = cc;
  }
  function hue(s) { var x = 0; for (var k = 0; k < s.length; k++) x = (x * 31 + s.charCodeAt(k)) % 360; return x; }
  function flagColour(v, r, c) {
    var id = M.ids[v - 1], f = FLAGS[id], b = bbox[v];
    if (!f) return 'hsl(' + hue(id + M.names[v - 1]) + ' 38% 60%)';
    var t = f[0], cs = f.slice(1), fy = (r - b[0]) / Math.max(1, b[1] - b[0]), fx = (c - b[2]) / Math.max(1, b[3] - b[2]);
    if (t === 'h') return cs[Math.min(cs.length - 1, Math.floor(fy * cs.length))];
    if (t === 'v') return cs[Math.min(cs.length - 1, Math.floor(fx * cs.length))];
    if (t === 'm') return cs[(r * 7 + c * 13 + ((r * c) % 5)) % cs.length];
    var d = Math.hypot(fx - .5, fy - .5);
    if (t === 'd') return d < .24 ? cs[1] : cs[0];
    if (t === 'br') return d < .14 ? '#002776' : d < .3 ? '#FFDF00' : '#009C3B';
    if (t === 'cn') return (fx < .3 && fy < .4) ? cs[1] : cs[0];
    if (t === 'us') return (fy < .45 && fx < .4) ? '#3C3B6E' : (Math.floor(fy * 13) % 2 ? W : '#B22234');
    return cs[0];
  }
  function isLight() { return root.getAttribute('data-theme') === 'light'; }
  function forTheme(c) {
    if (!isLight() || c.charAt(0) !== '#') return c;
    var n = parseInt(c.slice(1), 16);
    var lum = (0.2126 * Math.floor(n / 65536) + 0.7152 * (Math.floor(n / 256) % 256) + 0.0722 * (n % 256)) / 255;
    return lum > 0.86 ? '#B9C3D1' : c;
  }
  function paintColours() { for (var i0 = 0; i0 < cells.length; i0++) if (cells[i0]) colour[i0] = forTheme(flagColour(cells[i0], Math.floor(i0 / M.cols), i0 % M.cols)); }
  paintColours();
  document.addEventListener('themechange', function () { paintColours(); drawMap(); });

  function xy(lat, lon) { return [(lon + 180) / 360, (M.lat0 - lat) / (M.lat0 - M.lat1)]; }
  function dims() { return { W: sc.clientWidth, H: sc.clientHeight, bw: box.offsetWidth, bh: box.offsetHeight, sl: sc.scrollLeft, st: sc.scrollTop }; }
  function drawMap() {
    var d = dims(), dpr = Math.min(window.devicePixelRatio || 1, 2), cw = Math.round(d.W * dpr), ch = Math.round(d.H * dpr);
    if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, d.W, d.H);
    var sx = d.bw / M.cols, sy = d.bh / M.rows, rad = Math.max(.6, Math.min(sx, sy) * .36);
    var c0 = Math.max(0, Math.floor(d.sl / sx) - 1), c1 = Math.min(M.cols, Math.ceil((d.sl + d.W) / sx) + 1);
    var r0 = Math.max(0, Math.floor(d.st / sy) - 1), r1 = Math.min(M.rows, Math.ceil((d.st + d.H) / sy) + 1);
    ctx.fillStyle = isLight() ? 'rgba(15,23,42,.08)' : 'rgba(255,255,255,.05)';
    for (var r = r0; r < r1; r++) for (var c = c0; c < c1; c++) if (!cells[r * M.cols + c] && (r + c) % 3 === 0) ctx.fillRect((c + .5) * sx - d.sl - .5, (r + .5) * sy - d.st - .5, 1, 1);
    var round = rad > 1.3;
    for (r = r0; r < r1; r++) for (c = c0; c < c1; c++) {
      var i = r * M.cols + c, v = cells[i]; if (!v) continue;
      var on = v === hover || v === sel, x = (c + .5) * sx - d.sl, y = (r + .5) * sy - d.st, rr2 = on ? rad * 1.18 : rad;
      ctx.globalAlpha = on ? 1 : (sel || hover ? .5 : .78); ctx.fillStyle = colour[i];
      if (round) { ctx.beginPath(); ctx.arc(x, y, rr2, 0, 6.2832); ctx.fill(); } else ctx.fillRect(x - rr2, y - rr2, rr2 * 2, rr2 * 2);
    }
    ctx.globalAlpha = 1;
  }
  var drawQueued = false;
  function queueDraw() { if (!drawQueued) { drawQueued = true; requestAnimationFrame(function () { drawQueued = false; drawMap(); }); } }

  function arcPath(a, b) {
    var p = xy(a.lat, a.lon), q = xy(b.lat, b.lon), x1 = p[0] * 360, y1 = p[1] * 162, x2 = q[0] * 360, y2 = q[1] * 162;
    var mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - Math.hypot(x2 - x1, y2 - y1) * .28;
    return 'M' + x1 + ' ' + y1 + ' Q' + mx + ' ' + my + ' ' + x2 + ' ' + y2;
  }
  $('#arcSG').setAttribute('d', arcPath(PLACES.IN, PLACES.SG));
  $('#arcUK').setAttribute('d', arcPath(PLACES.IN, PLACES.UK));
  Object.keys(PLACES).forEach(function (k) {
    var P = PLACES[k], p = xy(P.lat, P.lon), b = document.createElement('button');
    b.type = 'button'; b.className = 'pin'; b.dataset.place = k; b.style.left = (p[0] * 100) + '%'; b.style.top = (p[1] * 100) + '%';
    b.setAttribute('aria-label', P.title + ': show what I did there'); b.innerHTML = '<span>' + P.label + '</span>';
    box.appendChild(b);
  });

  /* zoom and pan */
  function zMin() { return Math.max(1, (360 / 162) * sc.clientHeight / Math.max(1, sc.clientWidth)); }
  function centreOn(lon, lat) { var d = dims(); sc.scrollLeft = (lon + 180) / 360 * d.bw - d.W / 2; sc.scrollTop = (M.lat0 - lat) / (M.lat0 - M.lat1) * d.bh - d.H / 2; }
  function setZoom(nz, ax, ay) {
    var d = dims(); ax = ax == null ? d.W / 2 : ax; ay = ay == null ? d.H / 2 : ay;
    var fx = (d.sl + ax) / d.bw, fy = (d.st + ay) / d.bh;
    z = Math.max(zMin(), Math.min(6, nz)); box.style.setProperty('--z', z);
    sc.scrollLeft = fx * box.offsetWidth - ax; sc.scrollTop = fy * box.offsetHeight - ay;
    $('#zLevel').textContent = (Math.round(z * 10) / 10) + 'x';
    $('#zIn').disabled = z >= 6; $('#zOut').disabled = z <= zMin() + .01;
    syncSlider(); drawMap();
  }
  function resetMap() { setZoom(phone.matches ? 2.4 : 1); if (phone.matches) centreOn(36, 36); syncSlider(); drawMap(); }
  $('#zIn').addEventListener('click', function () { setZoom(z * 1.5); });
  $('#zOut').addEventListener('click', function () { setZoom(z / 1.5); });
  $('#zReset').addEventListener('click', resetMap);
  sc.addEventListener('dblclick', function (e) { var r = sc.getBoundingClientRect(); setZoom(z * 1.6, e.clientX - r.left, e.clientY - r.top); });
  sc.addEventListener('wheel', function (e) { if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); var r = sc.getBoundingClientRect(); setZoom(z * (e.deltaY < 0 ? 1.15 : 1 / 1.15), e.clientX - r.left, e.clientY - r.top); }, { passive: false });
  function syncSlider() { var m = sc.scrollWidth - sc.clientWidth; slider.value = m > 0 ? Math.round(sc.scrollLeft / m * 100) : 50; }
  slider.addEventListener('input', function () { sc.scrollLeft = (sc.scrollWidth - sc.clientWidth) * slider.value / 100; });
  sc.addEventListener('scroll', function () { queueDraw(); syncSlider(); }, { passive: true });
  var drag = null, moved = false;
  sc.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('.pin')) return; drag = { x: e.clientX, y: e.clientY, sl: sc.scrollLeft, st: sc.scrollTop }; moved = false; });
  window.addEventListener('pointermove', function (e) {
    if (!drag) return; var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.abs(dx) + Math.abs(dy) > 4) { moved = true; sc.classList.add('grabbing'); tip.hidden = true; }
    sc.scrollLeft = drag.sl - dx; sc.scrollTop = drag.st - dy;
  });
  window.addEventListener('pointerup', function () { drag = null; sc.classList.remove('grabbing'); });

  /* stories and jokes */
  var mapMail = $('.map-mail [data-open]'), mapMailTx = $('.map-mail span');
  function mailMode(nk) { mapMail.dataset.open = nk ? 'nk' : 'email'; mapMailTx.textContent = nk ? 'Hiring in North Korea?' : 'Hiring in one of these places?'; }
  function restart() { place.classList.remove('swap'); void place.offsetWidth; place.classList.add('swap'); }
  function mark() { $$('[data-place]').forEach(function (b) { b.classList.toggle('on', b.dataset.place === selPlace); }); }
  function showPlace(k, centre) {
    var P = PLACES[k]; selPlace = k; mailMode(false); sel = k === 'IN' ? IN : k === 'UK' ? UK : 0;
    place.innerHTML = (k === 'UK' ? '<p class="lead-uk">I\'m here! Please contact me by email.</p>' : '') + '<div class="hd">' + esc(P.sub) + '</div><h2>' + esc(P.title) + '</h2><ul>' +
      P.items.map(function (it) { return '<li><span class="y">' + esc(it[0]) + '</span><span><b>' + esc(it[1]) + '</b><span>' + esc(it[2]) + '</span></span></li>'; }).join('') + '</ul>';
    restart(); mark(); if (centre && z > zMin() + .01) centreOn(P.lon, P.lat); drawMap();
  }
  function showJoke(text, name) {
    selPlace = null;
    place.innerHTML = '<div class="hd">' + esc(name || 'Somewhere') + '</div><p class="joke">' + esc(text) + '</p><p class="hint">For the real story, pick India, Singapore or the United Kingdom.</p>';
    restart(); mark(); drawMap();
  }
  function cellAt(e) {
    var r = sc.getBoundingClientRect(), d = dims(), mx = e.clientX - r.left + d.sl, my = e.clientY - r.top + d.st;
    var c = Math.floor(mx / (d.bw / M.cols)), row = Math.floor(my / (d.bh / M.rows));
    if (c < 0 || row < 0 || c >= M.cols || row >= M.rows) return 0;
    var v = cells[row * M.cols + c];
    if (!v) for (var dy = -1; dy <= 1 && !v; dy++) for (var dx = -1; dx <= 1 && !v; dx++) { var r2 = row + dy, c2 = c + dx; if (r2 >= 0 && r2 < M.rows && c2 >= 0 && c2 < M.cols) v = cells[r2 * M.cols + c2]; }
    return v;
  }
  sc.addEventListener('pointermove', function (e) {
    if (drag && moved) return;
    if (e.pointerType === 'touch' || e.target.closest('.pin')) { tip.hidden = true; return; }
    var v = cellAt(e), r = view.getBoundingClientRect();
    if (v) { tip.hidden = false; tip.textContent = M.names[v - 1]; tip.style.left = (e.clientX - r.left) + 'px'; tip.style.top = (e.clientY - r.top) + 'px'; } else tip.hidden = true;
    if (v !== hover) { hover = v; queueDraw(); }
  });
  sc.addEventListener('pointerleave', function () { tip.hidden = true; hover = 0; queueDraw(); });
  sc.addEventListener('click', function (e) {
    if (moved) { moved = false; return; }
    var pin = e.target.closest('.pin'); if (pin) return showPlace(pin.dataset.place);
    var v = cellAt(e);
    if (!v) { sel = 0; mailMode(false); return showJoke(OCEAN[Math.floor(Math.random() * OCEAN.length)], 'Ocean'); }
    var id = M.ids[v - 1], name = M.names[v - 1];
    if (v === IN) return showPlace('IN');
    if (v === UK) return showPlace('UK');
    sel = v; mailMode(id === '408');
    if (JOKES[id]) return showJoke(JOKES[id], name);
    showJoke(GENERIC[Math.floor(Math.random() * GENERIC.length)].replace('{c}', name), name);
  });
  $$('.map-side [data-place]').forEach(function (b) { b.addEventListener('click', function () { showPlace(b.dataset.place, true); }); });
  showPlace('UK');
  var lastW = innerWidth;
  window.addEventListener('resize', function () { if (innerWidth !== lastW) { lastW = innerWidth; resetMap(); } else drawMap(); });
  requestAnimationFrame(resetMap);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawMap);

  /* ~ opens the terminal, the Konami code drops a flag */
  var seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], pos = 0;
  document.addEventListener('keydown', function (e) {
    var tag = (document.activeElement && document.activeElement.tagName) || '';
    if ((e.key === '~' || e.key === '`') && !e.ctrlKey && !e.metaKey && !e.altKey && tScrim.hidden && mScrim.hidden && tag !== 'INPUT' && tag !== 'TEXTAREA') { e.preventDefault(); openTerm(); return; }
    pos = (e.key === seq[pos]) ? pos + 1 : (e.key === seq[0] ? 1 : 0);
    if (pos === seq.length) { pos = 0; matrixBurst(); toast('Cheat code accepted: flag{k0n4m1_4n4lyst}'); }
  });

  var title = document.title;
  document.addEventListener('visibilitychange', function () { document.title = document.hidden ? 'Come back, the alert queue is growing' : title; });
  try { console.log('%cHey, inspector.', 'color:#34E39A;font:700 16px monospace'); console.log('You are reading the source of a security analyst. Try ~ on the page, then: cat flag.txt'); } catch (e) {}
})();
