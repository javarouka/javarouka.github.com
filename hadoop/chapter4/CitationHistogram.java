import java.io.IOException;
import java.util.Iterator;
import java.util.logging.Logger;
import java.util.logging.Level;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.Tool;
import org.apache.hadoop.util.ToolRunner;

class CitationHistorgram extends Configured implements Tool {

	Logger logger = Logger.getLogger(CitationHistorgram.class.toString());

	public static class MapClass extends Mapper<LongWritable, Text, IntWritable, IntWritable> {

		private final static IntWritable uno = new IntWritable(1);
		private IntWritable citationCount = new IntWritable();

		@Override
		protected void map(
			LongWritable k, Text v, Context context) throws IOException ,InterruptedException {			

			String[] line = v.toString().split("\t");			
			citationCount.set(Integer.parseInt(line[1].trim()));
			context.write(citationCount, uno);
		}
	}

	public static class ReduceClass extends Reducer<IntWritable, IntWritable, IntWritable, IntWritable> { 
		
		@Override
		protected void reduce(
			IntWritable key, Iterable<IntWritable> values, Context context) throws IOException ,InterruptedException {
			int sum = 0;
			for (IntWritable c : values) {
				sum += c.get();
			}
			context.write(key, new IntWritable(sum));			
		};
	}
	
	@Override
	public int run(String[] args) throws Exception {
		Configuration conf = getConf();
		Job job = new Job(conf, "CiteHistogram");		
		job.setJarByClass(CitationHistorgram.class);

		Path in = new Path(args[0]);
	    Path out = new Path(args[1]);

	    FileInputFormat.setInputPaths(job, in);
		FileOutputFormat.setOutputPath(job, out);
		job.setMapperClass(MapClass.class);
		job.setReducerClass(ReduceClass.class);
		job.setInputFormatClass(TextInputFormat.class);
		job.setOutputFormatClass(TextOutputFormat.class);
		job.setOutputKeyClass(IntWritable.class);
		job.setOutputValueClass(IntWritable.class);		
																															
		boolean r = job.waitForCompletion(true);
		System.exit((r) ? 0 : 1);
		return 0;
	}

	public static void main(String[] args) throws Exception {
		int res = ToolRunner.run(new Configuration(), new CitationHistorgram(), args);
		System.exit(res);
	}
}
