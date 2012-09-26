//package chapter04;

import java.io.IOException;
import java.util.Iterator;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.FileInputFormat;
import org.apache.hadoop.mapred.FileOutputFormat;
import org.apache.hadoop.mapred.JobClient;
import org.apache.hadoop.mapred.JobConf;
import org.apache.hadoop.mapred.KeyValueTextInputFormat;
import org.apache.hadoop.mapred.MapReduceBase;
import org.apache.hadoop.mapred.Mapper;
import org.apache.hadoop.mapred.OutputCollector;
import org.apache.hadoop.mapred.Reducer;
import org.apache.hadoop.mapred.Reporter;
import org.apache.hadoop.mapred.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

public class MyJob extends Configured implements Tool {

	public static class MapClass 
		extends MapReduceBase 
		implements Mapper<Text, Text, Text, Text> {

		@Override
		public void map(
			Text k, Text v, 
			OutputCollector<Text, Text> output,
			Reporter reporter) 
			throws IOException {
				output.collect(v, k);
		}
	}

	public static class ReduceClass 
		extends MapReduceBase
		implements Reducer<Text, Text, Text, Text> {

		@Override
		public void reduce(
			Text k, Iterator<Text> values,
			OutputCollector<Text, Text> output, 
			Reporter reporter) 
			throws IOException {
				String csv = "";
				while(values.hasNext()) {
					if(!csv.isEmpty()) csv += ",";
					csv += values.next().toString();
				}
				output.collect(k, new Text(csv));
		}
	}
																																																
	@Override
	public int run(String[] args) throws Exception {
		// 설정 객체
		Configuration configuration = getConf();	
		JobConf job = new JobConf(configuration, getClass());

		// 작업 패스 설정
		// 로컬과 분산 경로. in - out
		Path in = new Path(args[0]);
		Path out = new Path(args[1]);

		FileInputFormat.setInputPaths(job, in);
		FileOutputFormat.setOutputPath(job, out);

		job.setJobName("javarouka Test Job");
		job.setMapperClass(MapClass.class);
		job.setReducerClass(ReduceClass.class);

		job.setInputFormat(KeyValueTextInputFormat.class);
		job.setOutputFormat(TextOutputFormat.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(Text.class);
		job.set("key.value.separator.in.input.line", ",");

		JobClient.runJob(job);

		return 0;
	}	

	public static void main(String[] args) throws Exception {
		int res = ToolRunner.run(new Configuration(), new MyJob(), args);
		System.exit(res);
	}
}
