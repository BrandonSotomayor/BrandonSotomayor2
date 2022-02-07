package base.project.examples.generator;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class gitM5 {
	
	public static void main (String args[]) {
		
		System.out.println("Numero caso: ");
		Scanner sc = new Scanner(System.in);
		
		int numCasos = sc.nextInt();
		int cont = 0;
		int numAleatoriVegades; //nombreInicial per la sequencia
		int contNombres = 0;
		int numAleatoris;		//nombre vegades que ha de repetir dins del buclie
		int [] n = new int[numCasos];
		
		ArrayList<Integer> myNumbers= null;
		
		
		System.out.println();
		while ( cont < numCasos ) {
						
			myNumbers = new ArrayList<Integer>();
			
			numAleatoriVegades = (int) (Math.random()*10+1);
			
			System.out.println("Num repeticions: "+numAleatoriVegades);
			
			while ( contNombres < numAleatoriVegades ) {				
				
				numAleatoris = (int) (Math.random()*10+1);
				myNumbers.add(numAleatoris);
				
				System.out.println(numAleatoris);
				contNombres +=1;

			}
			
			System.out.println("Max: "+Collections.max(myNumbers));
			
			n[cont] = Collections.max(myNumbers);
			
			contNombres = 0;
			cont += 1;
			System.out.println();
		}
		
		for ( int i = 0; i<n.length; i++ ) {
			System.out.println(n[i]);
		}
	}


}
