import java.io.IOException;
import java.util.Scanner;
import java.util.NoSuchElementException;

public class AttrMax {
	public static void main(String[] args) throws IOException {
		if(args.length < 1) {
			System.err.println("@Usage ## " + AttrMax.class.getSimpleName() + " {Number}");
			System.exit(-1);
		}
		int i = Integer.parseInt(args[0]);
		int max = 0;
		Scanner br = null;
		try {
			br = new Scanner(System.in);
			String line;
			while(true) {	
				try {
					line = br.nextLine();
					String[] spl = line.split(",");					
					int item = (spl[i].isEmpty()) ? 0 : Integer.parseInt(spl[i]);
					if(max < item) {
						max = item;
					}
				}
				catch(NumberFormatException cont) {
					continue;
				}
				catch(NoSuchElementException e) {
					break;
				}
			}
			System.out.println(max);
		}
		finally {
			if(br != null) br.close();
		}
		System.exit(0);
	}	
}

