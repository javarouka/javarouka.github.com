<?php

while(!feof(STDIN)) {
	$line = fgets(STDIN);
	if(mt_rand(1, 100) <= $argv[1]){
		echo $line;
	}
}

?>
