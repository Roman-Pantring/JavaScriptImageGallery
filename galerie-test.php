<?php 
$folder = "Sample_Pictures";
$file = utf8_decode($folder.'/'.('Löwe.jpg'));
$file2 = ($folder.'/'.('Löwe.jpg'));
if(file_exists($file)){
	echo('V1 Windows');
	}else{
	echo('V2 Linux');
	if(file_exists($file2)){
		echo(' -= Löwe.jpg =- ');
		echo($file2);
	}
}
echo($file);
?>
