import java.io.*;
import java.net.*;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;

public class PutMerge {
	public static void main(String args[]) throws IOException {

		if(args == null || args.length < 2) {
			throw new IllegalArgumentException("arguments must be 2 over");
		}

		Configuration conf = new Configuration();
		FileSystem hdfs = FileSystem.get(URI.create("hdfs://112.136.130.6:9000/"), conf);
		FileSystem local = FileSystem.getLocal(conf);

		//System.out.println("HDFS File System");
		//FileStatus[] hdfsDir = hdfs.listStatus(new Path("/"));
		//for(FileStatus hf : hdfsDir) {
		//	System.out.println(hf.getPath());
		//}

		Path inputDir = new Path(args[0]);
		Path hdfsFile = new Path(args[1]);
		FSDataOutputStream fout = null;
		FSDataInputStream in = null;
		

		try {
			// Open HDFS OutputStream
			fout = hdfs.create(hdfsFile);
			FileStatus [] inputFiles = local.listStatus(inputDir);
	        System.err.println(" directory files size" + inputFiles.length);
			
			for(FileStatus f : inputFiles) {
				System.err.print(f.getPath() + " read byte and hdfs write ## ");				
				in = local.open(f.getPath());
				byte buff[] = new byte[256];
				int byteRead = 0;
				while((byteRead = in.read(buff)) > 0) {
					System.err.print(".");
					fout.write(buff, 0, byteRead);
				}
				in.close();				
				System.out.println("end.");
			}
			fout.flush();
			fout.close();			
		}
		catch(IOException e) {
			e.printStackTrace();
		}
		finally {
			if(in != null) in.close();
			if(fout != null) fout.close();
		}
		
	}
}
