import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { z } from "zod";

export default function RegisterPage() {
  const userSchema = z.object({
    username: z
      .string()
      .min(5, { message: "Username must be at least 5 characters." })
      .max(30, { message: "Username must be at most 30 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    pwd: z.string().min(7, { message: "Password has to be over 6 characters long." }),
  });

  type UserFormType = z.infer<typeof userSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserFormType> = (data: UserFormType) => {
    console.log(data);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.headerText}>Register</Text>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
            <TextInput
              mode="outlined"
              label="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              activeOutlineColor={error ? "red" : "black"}
              style={styles.input}
            />
        )}
        name="username"
      />
      {errors.username && (
        <Text style={{ color: "#ff8566" }}>{errors.username.message}</Text>
      )}

      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            mode="outlined"
            label="E-mail"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            activeOutlineColor={error ? "red" : "black"}
            style={styles.input}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={{ color: "#ff8566" }}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            mode="outlined"
            label="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            activeOutlineColor={error ? "#FF586B" : "#090932"}
            style={styles.input}
          />
        )}
        name="pwd"
      />
      {errors.pwd && (
        <Text style={{ color: "#ff8566" }}>{errors.pwd.message}</Text>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} color={'#5D089A'}/>
    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    backgroundColor: '#090932',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    color: '#83FF96',
    fontSize: 35,
    fontWeight: 700,

    marginBottom: 5
  },
  input: {
    color: 'white',
    width: '85%',
    marginBottom: 15
  },
  btn: {
    color: 'white',
    backgroundColor: '#5D089A'
  }
});