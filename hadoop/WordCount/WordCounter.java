import java.io.*;
import java.net.*;

import org.apache.hadoop.mapred.*;
import org.apache.hadoop.mapred.lib.*;
import org.apache.hadoop.io.*;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;

public class WordCounter {
	public static void main(String[] args) {
		JobClient client = new JobClient();
		JobConf conf = new JobConf(WordCounter.class);

		FileInputFormat.addInputPath(conf, new Path(args[0]));
		FileOutputFormat.setOutputPath(conf, new Path("hdfs://112.136.130.6:9000/" + args[1]));

		conf.setJobName("SimpleWordCount");
		conf.setInputFormat(TextInputFormat.class);
		conf.setOutputKeyClass(Text.class);
		conf.setOutputValueClass(LongWritable.class);
		conf.setMapperClass(TokenCountMapper.class);
		conf.setCombinerClass(LongSumReducer.class);
		conf.setReducerClass(LongSumReducer.class);

		client.setConf(conf);

		try {
			JobClient.runJob(conf);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}	
}
