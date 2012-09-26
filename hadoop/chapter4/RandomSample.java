import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class RandomSample {
	public static void main(String[] args) throws IOException {
		if(args.length < 1) {
			System.err.println("Error...");
			System.exit(-1);
		}
		int i = Integer.parseInt(args[0]);
		Scanner br = null;
		Random r = new Random(System.currentTimeMillis());
		try {
			br = new Scanner(System.in);
			String line;
			while(true) {	
				try {
					line = br.nextLine();
					if(i <= r.nextInt()) {
						System.out.println(line);				
					}
				}
				catch(java.util.NoSuchElementException e) {
					break;
				}
			}
		}
		finally {
			if(br != null) br.close();
		}
		System.exit(0);
	}	
}

