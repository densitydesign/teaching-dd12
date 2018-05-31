<?php 
//Reading file
$jsonString = file_get_contents('json/mydata.json');
//Decoding file
$data = json_decode($jsonString, true);
//Cloning into new file before update data
file_put_contents('json/json_'.date('d').'_'.date('m').'_'.time().'.json', json_encode($data));
//Clicked treemap area name
$name = $_POST['name'];
$url = $_POST['url'];
//Cycle data to find correct name and update value
foreach($data['children'] as $firstIndex => $firstValue):
	foreach($firstValue['children'] as $index => $value):
		if($value['name'] === $name && $value['url'] == $url):
			$data['children'][$firstIndex]['children'][$index]['value'] ++;
		endif;	
	endforeach;
endforeach;
//Encoding data to write into the file
$newJsonString = json_encode($data);
//Writing update data
file_put_contents('json/mydata.json', $newJsonString);
//Response
echo json_encode([
	'response' => true
]);
?>